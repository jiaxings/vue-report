<template>
  <div class="p-6 bg-grey-light">
    <div class="full-width">
      <div class="container mx-auto">
        <div v-for="result in results" :key="result.cat_slug" class="mb-6">
        <div
          class="px-3 py-6 rounded-lg relative cursor-pointer"
          @click="toggleChildren(result)"
          :class="aria ? 'rounded-b-none': ''"
          :style="{
            backgroundColor: result.parent.background_color,
            opacity: .85
          }"
        >
          <div class="mr-12 inline-block">
            <img class="w-16" :src="result.parent.icon">
          </div>
          <div class="text-white leading-loose inline-block">
            <h3>{{ result.parent.title }}</h3>
            <p>{{ result.parent.desc }}</p>
          </div>

          <div class="mark absolute pin-r text-red w-16 h-5 leading-loose bg-white text-xs" style="top:30px;" v-if="result.parent.update_desc">
            {{ result.parent.update_desc }}
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="result.children && result.children.length"
            class="bg-grey-lightest bg-grey px-12 pb-6 rounded-b-lg children-list"
            :id="result.parent.cat_slug"
            v-show="result.active"
          >
            <div v-for="child in result.children" :key="child.func_title">
              <div class="py-6">
                <h4 class="mb-4">
                  {{ child.func_title }}
                  <a
                    v-if="child.t_test_url"
                    :href="child.t_test_url"
                    class="text-green text-sm hover:text-green-darker cursor-pointer float-right mark"
                  >
                    测测现状表现
                  </a>
                </h4>
                <div v-if="child.gender_desc" class="my-3">
                  <span class="border-l-2 border-yellow-dark bg-grey-lighter px-3 py-2 text-grey-darker">
                    {{ child.gender_desc }}
                  </span>
                </div>

                <a :href="child.func_desc_url" class="text-sm mb-4 no-underline text-grey-darker block leading-loose">
                  <p>
                    {{ child.desc }}
                    <img src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/arrow@2x.svg" class="float-right"
                         alt="">
                  </p>
                </a>

                <div class="text-xs text-grey-dark" v-if="child.func_influence">
                            <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer -ml-1">
                                <img style="height: 16px;" src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/heritability.png">
                                {{ child.func_influence }}
                            </span>
                  <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer" v-if="child.func_references">
                               {{ child.func_references }}
                            </span>
                  <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer" v-if="child.func_percentage">
                                {{ child.func_percentage }}
                            </span>
                  <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer" v-if="child.func_rare_desc">
                                {{ child.func_rare_desc }}
                            </span>
                </div>

              </div>
            </div>

            <div class="py-12">
              <div class="float-right">
                <button class="px-1 py-2 hover:bg-grey-light rounded text-grey-dark text-sm" @click="hideChildren(result)">收起</button>
              </div>

            </div>

          </div>
        </transition>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      results: {},
      aria: false,
      containsCat: {}
    }
  },
  mounted () {
    this.fetchReport()
  },
  methods: {
    toggleChildren (result) {
      if (result.active) {
        this.$set(result, 'active', false)
      } else {
        this.$set(result, 'active', true)
      }
    },
    hideChildren (result) {
      if (result.active) {
        this.$set(result, 'active', false)
      }
    },
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
<style>
  .mark::before,
  .mark::after {
    content: "";
    position: absolute;
    right: 100%;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
  }

  .mark::after {
    bottom: 0px;
    border-bottom: 13px solid #fff;
  }

  .mark::before {
    top: 0px;
    border-top: 15px solid #fff;
  }

  .children-list > div {
    border-bottom: 1px solid #ddd;
  }

  .children-list > div:last-child {
    border-bottom: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
