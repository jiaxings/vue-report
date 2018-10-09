<template>
    <div class="p-6">
        <div class="full-width">
            <div class="container mx-auto">
                <div class="flex justify-between">
                    <div>
                        <h2>刘大可</h2>
                        <div class="mt-4 px-4 py-2 border border-blue rounded-full text-center">
                            蒙古地区人
                        </div>
                    </div>
                    <div>
                        <h3>16个稀有标签</h3>
                        <div class="mt-4 px-4 py-2 bg-yellow-dark rounded-full text-center">
                            分享
                        </div>
                    </div>
                </div>

                <div class="py-2 mt-4" style="line-height: 3;">
                  <a v-for="tag in tags" :key="tag" class="inline-block mt-4 px-4 bg-grey-lighter rounded-full text-center cursor-pointer mr-4 mb-4 whitespace-no-wrap">
                         {{ tag }}
                  </a>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      results: {},
      aria: false,
      containsCat: {},
      tags: [
        '最难留疤',
        '容易焦虑',
        '非常脆弱',
        '比较专注',
        '比较怕痛',
        '不易长痘',
        '最难失眠',
        '酒瘾最小',
        '最难留疤',
        '最难留疤',
        '最难留疤',
        '最难留疤'
      ]
    }
  },
  mounted () {
    this.fetchReport()
  },
  methods: {
    fetchReport () {
      axios.get('static/result.json')
        .then(response => {
          console.log(response.data)
          this.results = this.formatResult(response.data)
        })
    },
    formatResult (result) {
      let groups = {}
      result.forEach(r => {
        if (r.cat_slug) {
          let cat = r.cat_slug
          groups[cat] = groups[cat] || {}
          if (r.background_color) {
            groups[cat]['parent'] = r
          } else {
            groups[cat]['children'] = groups[cat]['children'] || []
            groups[cat]['children'].push(r)
          }
        } else {
          groups['ancestry'] = {}
          groups['ancestry']['parent'] = r
        }
      })
      return groups
    }
  }
}
</script>
