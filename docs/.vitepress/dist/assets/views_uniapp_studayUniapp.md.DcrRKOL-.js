import{_ as l,D as i,c as o,I as e,w as p,l as n,a,a1 as t,o as r}from"./chunks/framework.BN8UrsJY.js";const D=JSON.parse('{"title":"学习uniapp","description":"","frontmatter":{},"headers":[],"relativePath":"views/uniapp/studayUniapp.md","filePath":"views/uniapp/studayUniapp.md"}'),c={name:"views/uniapp/studayUniapp.md"},u=t(`<h1 id="学习uniapp" tabindex="-1">学习uniapp <a class="header-anchor" href="#学习uniapp" aria-label="Permalink to &quot;学习uniapp&quot;">​</a></h1><h2 id="一、uniapp的生命周期" tabindex="-1">一、uniapp的生命周期 <a class="header-anchor" href="#一、uniapp的生命周期" aria-label="Permalink to &quot;一、uniapp的生命周期&quot;">​</a></h2><p>分为：应用生命周期、页面生命周期、组件生命周期、</p><h6 id="_1-1-应用生命周期-仅在app-vue页面有效-简单列举出常用的" tabindex="-1">1.1 应用生命周期：仅在app.vue页面有效 （简单列举出常用的） <a class="header-anchor" href="#_1-1-应用生命周期-仅在app-vue页面有效-简单列举出常用的" aria-label="Permalink to &quot;1.1 应用生命周期：仅在app.vue页面有效 （简单列举出常用的）&quot;">​</a></h6><pre><code> onLaunch：初始化页面
 onShow：显示页面时触发
 onHide：隐藏页面是触发、前台切换到后台时触发
</code></pre><h6 id="_1-2-页面生命周期" tabindex="-1">1.2 页面生命周期： <a class="header-anchor" href="#_1-2-页面生命周期" aria-label="Permalink to &quot;1.2 页面生命周期：&quot;">​</a></h6><pre><code> onInit：监听页面初始化时触发
 onLoad：页面元素加载完成后触发
 onShow：显示页面时触发
 onReady：页面初次渲染完成，在dom解析完成之后立刻被调用，发生在内容之前
 onHide：隐藏页面是触发、前台切换到后台时触发
</code></pre>`,7),d=n("p",null,[a("在小程序中，加载一个新的页面时，先是执行"),n("strong",null,"onLoad"),a("再执行"),n("strong",null,"onShow"),a("后执行"),n("strong",null,"onReady"),a("。"),n("br")],-1),h=n("div",{style:{display:"flex","align-items":"center"}},null,-1),_=t(`<h6 id="_1-3-组件生命周期" tabindex="-1">1.3 组件生命周期： <a class="header-anchor" href="#_1-3-组件生命周期" aria-label="Permalink to &quot;1.3 组件生命周期：&quot;">​</a></h6><pre><code>  组件生命周期和vue的是一样的
</code></pre><h2 id="二、目录-配置" tabindex="-1">二、目录--配置 <a class="header-anchor" href="#二、目录-配置" aria-label="Permalink to &quot;二、目录--配置&quot;">​</a></h2><h6 id="_2-1-page-json文件" tabindex="-1">2.1 page.json文件 <a class="header-anchor" href="#_2-1-page-json文件" aria-label="Permalink to &quot;2.1 page.json文件&quot;">​</a></h6><pre><code>  比如：页面的路径===pages、原生的导航栏===globalStyle、底部的原生的tabbar===tabBar等...
   1.1 pages：在新建一个页面文件时默认勾选在page.json中注册，就会自动生成该对应的路径
   1.2 globalStyle：全局的样式配置、例如导航栏背景色、导航栏标题
   1.3 tabbar:底部切换的tab，
</code></pre><h6 id="_2-2-static文件夹" tabindex="-1">2.2 static文件夹 <a class="header-anchor" href="#_2-2-static文件夹" aria-label="Permalink to &quot;2.2 static文件夹&quot;">​</a></h6><pre><code>   static文件夹相当于public ，存放静态资源，例如：图片、css
</code></pre><h6 id="_2-3-pages文件夹" tabindex="-1">2.3 pages文件夹 <a class="header-anchor" href="#_2-3-pages文件夹" aria-label="Permalink to &quot;2.3 pages文件夹&quot;">​</a></h6><pre><code>   pages文件夹相当于src，里面可以存放页面、js文件、共同组件...
</code></pre><h6 id="_2-4-main文件" tabindex="-1">2.4 main文件 <a class="header-anchor" href="#_2-4-main文件" aria-label="Permalink to &quot;2.4 main文件&quot;">​</a></h6><pre><code>   main文件是入口
</code></pre><h2 id="三、uniapp自带的组件库-uni-ui" tabindex="-1">三、uniapp自带的组件库 uni-ui <a class="header-anchor" href="#三、uniapp自带的组件库-uni-ui" aria-label="Permalink to &quot;三、uniapp自带的组件库  uni-ui&quot;">​</a></h2><p>比如说：vue的伴生是elementui组件库，那么uniapp的伴生就是uni-ui。它是基于vue组件、flex布局的、 无dom的跨全端ui框架。</p><p>在创建文件夹时选择uni-ui项目，创建完成之后就可以直接使用组件库了，在页面输入&quot;u&quot;就出现u开头 的标签，选择其中一个就可以使用该组件。</p><p>可通过：<a href="https://uniapp.dcloud.net.cn/component/uniui/quickstart.html" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/component/uniui/quickstart.html</a> 查看uniapp官网</p><h2 id="四、页面样式和布局" tabindex="-1">四、页面样式和布局 <a class="header-anchor" href="#四、页面样式和布局" aria-label="Permalink to &quot;四、页面样式和布局&quot;">​</a></h2><h6 id="_4-1-尺寸单位" tabindex="-1">4.1 尺寸单位 <a class="header-anchor" href="#_4-1-尺寸单位" aria-label="Permalink to &quot;4.1 尺寸单位&quot;">​</a></h6><p>uniapp支持的通用css单位包括：px和rpx <br> px：固定的像素长度单位<br> rpx：小程序中专用的长度单位，可以根据屏幕宽度自行适应<br></p><h6 id="_4-2-引入样式和选择器" tabindex="-1">4.2 引入样式和选择器 <a class="header-anchor" href="#_4-2-引入样式和选择器" aria-label="Permalink to &quot;4.2 引入样式和选择器&quot;">​</a></h6>`,19),b=n("br",null,null,-1),g=t('<h6 id="_4-3-全局样式与局部样式" tabindex="-1">4.3 全局样式与局部样式 <a class="header-anchor" href="#_4-3-全局样式与局部样式" aria-label="Permalink to &quot;4.3 全局样式与局部样式&quot;">​</a></h6><p>在app.vue中的样式为全局样式，适用于每一个页面 在单页面里面写的样式为局部样式，只作用于对应的页面中，并会覆盖掉app.vue中相同的选择器</p><h2 id="五、路由-router跳转方式" tabindex="-1">五、路由 router跳转方式 <a class="header-anchor" href="#五、路由-router跳转方式" aria-label="Permalink to &quot;五、路由 router跳转方式&quot;">​</a></h2><p>在uniapp中，可以通过以下方式进行页面跳转：</p><h6 id="_5-1-使用navigateto" tabindex="-1">5.1 使用navigateTo <a class="header-anchor" href="#_5-1-使用navigateto" aria-label="Permalink to &quot;5.1  使用navigateTo&quot;">​</a></h6><p>使用uni.navigateTo（）方法跳转页面，该方法会保留当前页面，并跳转到目标页面</p><h6 id="_5-2-使用redirectto" tabindex="-1">5.2 使用redirectTo <a class="header-anchor" href="#_5-2-使用redirectto" aria-label="Permalink to &quot;5.2  使用redirectTo&quot;">​</a></h6><p>使用uni.redirectTo（）方法跳转页面，该方法不会保留当前页面 关闭页面，并跳转到目标页面</p><h5 id="_5-3-使用relaunch" tabindex="-1">5.3 使用reLaunch <a class="header-anchor" href="#_5-3-使用relaunch" aria-label="Permalink to &quot;5.3  使用reLaunch&quot;">​</a></h5><p>使用uni.reLaunch（）方法跳转页面，该方法会关闭所有的页面，并跳转到目标页面</p><h5 id="_5-3-使用switchtab" tabindex="-1">5.3 使用switchTab <a class="header-anchor" href="#_5-3-使用switchtab" aria-label="Permalink to &quot;5.3  使用switchTab&quot;">​</a></h5><p>使用uni.switchTab（）方法跳转页面，该方法只能使用在tabbar中</p><h5 id="_5-4-使用标签navigator跳转-uniapp的内置组件的路由与页面跳转" tabindex="-1">5.4 使用标签navigator跳转 uniapp的内置组件的路由与页面跳转 <a class="header-anchor" href="#_5-4-使用标签navigator跳转-uniapp的内置组件的路由与页面跳转" aria-label="Permalink to &quot;5.4 使用标签navigator跳转  uniapp的内置组件的路由与页面跳转&quot;">​</a></h5>',13),m=t(`<h2 id="六、传参" tabindex="-1">六、传参 <a class="header-anchor" href="#六、传参" aria-label="Permalink to &quot;六、传参&quot;">​</a></h2><h6 id="_6-1-路由传参" tabindex="-1">6.1 路由传参 <a class="header-anchor" href="#_6-1-路由传参" aria-label="Permalink to &quot;6.1  路由传参&quot;">​</a></h6><p>路由url传参：可以通过路由拼接的方式传递参数，在跳转的页面里接收<br></p><h6 id="_6-2-父传子" tabindex="-1">6.2 父传子 <a class="header-anchor" href="#_6-2-父传子" aria-label="Permalink to &quot;6.2 父传子&quot;">​</a></h6><p>父传子：跟vue一致，通过在父组件中的子组件上绑定参数，子组件使用props接收即可<br></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> &lt;!-- 父组件传递 --&gt;</span></span>
<span class="line"><span> &lt;template&gt;</span></span>
<span class="line"><span>  &lt;view&gt;</span></span>
<span class="line"><span>  	&lt;serch  :placeholder=&quot;InputData&quot; &gt;&lt;/serch&gt;</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  	//注册组件</span></span>
<span class="line"><span>  	components: { serch, },// 搜索</span></span>
<span class="line"><span>  	data() {return {</span></span>
<span class="line"><span>                   InputData：&#39;数据&#39;</span></span>
<span class="line"><span>            }},</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;!-- 子组件接收 --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;serch-style&quot; &gt;</span></span>
<span class="line"><span>  	&lt;input ref=&quot;serach&quot; </span></span>
<span class="line"><span>  	:placeholder=&quot;DataNamePlaceholder&quot;</span></span>
<span class="line"><span>  	:focus=&quot;true&quot;/&gt;		</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>&lt;!-- 使用props --&gt;</span></span>
<span class="line"><span>  	props:[&quot;placeholder&quot;],</span></span>
<span class="line"><span>  	data() {</span></span>
<span class="line"><span>  		return {</span></span>
<span class="line"><span>  			DataNamePlaceholder:&quot;&quot;</span></span>
<span class="line"><span>  		}</span></span>
<span class="line"><span>  	},</span></span>
<span class="line"><span>  	mounted() {</span></span>
<span class="line"><span>      // 接受父组件传递的参数 </span></span>
<span class="line"><span>  		this.DataNamePlaceholder=this.$options.propsData.placeholder</span></span>
<span class="line"><span>  			},</span></span></code></pre></div><h6 id="_6-3-子传父" tabindex="-1">6.3 子传父 <a class="header-anchor" href="#_6-3-子传父" aria-label="Permalink to &quot;6.3 子传父&quot;">​</a></h6><p>子传父：跟vue一致，子组件通过$emit发送自定义事件，在父组件的子组件上接受自定义事件<br></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 子组件中自定义事件，参数 --&gt;</span></span>
<span class="line"><span> this.$emit(&quot;search&quot;,this.DataName)</span></span>
<span class="line"><span> &lt;!-- 父组件接受 --&gt;</span></span>
<span class="line"><span> &lt;template&gt;</span></span>
<span class="line"><span>  &lt;view&gt;</span></span>
<span class="line"><span>  	&lt;serch @search=&quot;searchDataAll&quot; :placeholder=&quot;InputData&quot; &gt;&lt;/serch&gt;</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  	//注册组件</span></span>
<span class="line"><span>  	components: { serch, },// 搜索</span></span>
<span class="line"><span>  	data() {return {}},</span></span>
<span class="line"><span>  	methods: {</span></span>
<span class="line"><span>  		// 搜索得到数据</span></span>
<span class="line"><span>  	async searchDataAll(val){</span></span>
<span class="line"><span>  		console.log(val,&quot;传递的值&quot;);</span></span>
<span class="line"><span>  		},</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h6 id="_6-4-组件之间" tabindex="-1">6.4 组件之间 <a class="header-anchor" href="#_6-4-组件之间" aria-label="Permalink to &quot;6.4 组件之间&quot;">​</a></h6>`,10),q=n("br",null,null,-1),f=n("br",null,null,-1),v=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- A页面传递参数   --&gt;</span></span>
<span class="line"><span>     uni.$emit(&#39;AddData&#39;,{mes:&quot;2&quot;})</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>&lt;!-- B页面接收参数 --&gt;</span></span>
<span class="line"><span>onLoad() { </span></span>
<span class="line"><span>  // 使用$on接收</span></span>
<span class="line"><span>  uni.$on(&#39;AddData&#39;,this.AddData)</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>  AddData(e){</span></span>
<span class="line"><span>     console.log(e,&quot;接收值&quot;)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样写会在第一遍跳转的时候，接收不到值，需要再返回A页面点击跳转B页面，B页面才能接收到值，这是因为第一次时uni.$on 还没有定义完成，因此没有接收到$emit传递的数据。 可以在A页面的$emit上绑定一个定时器（我目前使用较为简单方法，之后如有更好的，再重新编辑文档）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>	uni.$emit(&#39;serchData&#39;,res)</span></span>
<span class="line"><span>},500)</span></span></code></pre></div>`,3),T=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 可以通过返回值来判断是否成功移除了事件监听器 --&gt;</span></span>
<span class="line"><span>onUnload(){</span></span>
<span class="line"><span>	 let res=uni.$off(&quot;serchData&quot;)</span></span>
<span class="line"><span>	 console.log(res ?&quot;销毁了&quot; : &quot;并没有&quot;);</span></span>
<span class="line"><span>		},</span></span></code></pre></div><p>官网上给出了uni.$off的使用方式：<br></p><ul><li>如果没有给参数，是移除了所有监听事件。<br></li><li>如果只提供事件，是移除了该事件下的所有监听事件。<br></li><li>如果同时提供了事件和回调，是移除了回调里的监听器。<br></li><li>提供的回调必须要跟uni.$on里的回调为同一个才能移除整个回调的监听器<br></li></ul><p>当然，如果是一次性的事件就可以直接使用uni.$once里使用</p>`,4);function k(P,x,y,A,S,$){const s=i("font");return r(),o("div",null,[u,e(s,{color:"red"},{default:p(()=>[a("onLoad 、 onReady和onShow 的区别在于: ")]),_:1}),d,h,n("p",null,[a("在执行"),e(s,{color:"red"},{default:p(()=>[a("onLoad")]),_:1}),a("函数时，页面还没有被渲染，无法进行dom操作，而且获取参数并且只请求一次的事件可以放在onLoad里， 在 "),e(s,{color:"red"},{default:p(()=>[a("onReady")]),_:1}),a(" 函数执行时，页面已经被渲染出来了，就可以进行dom操作了。 而"),e(s,{color:"red"},{default:p(()=>[a(" onShow")]),_:1}),a("函数是每次显示页面时都会执行")]),_,n("p",null,[a("页面引入外部样式还是使用@import语句。"),b,a(" 选择器注意：在uniapp中不可使用 "),e(s,{color:"red"},{default:p(()=>[a(" *")]),_:1}),a(" 选择器")]),g,n("p",null,[a("是以标签的形式来跳转的，该组件类似标签 "),e(s,{style:{color:"red"}},{default:p(()=>[a("a")]),_:1}),a(" 组件，但只能跳转本地页面，目标页面必须在page.json中注册")]),m,n("p",null,[a("组件之间：可以使用uni自带的"),e(s,{style:{color:"red"}},{default:p(()=>[a("uni.$emit")]),_:1}),a(" 和"),e(s,{style:{color:"red"}},{default:p(()=>[a("uni.$on")]),_:1}),q,a(" uni.$emit触发全局的自定义事件。附加参数都会传给监听器回调。"),f,a(" uni.$on监听全局的自定义事件。回调函数接收所传入的参数")]),v,n("p",null,[a("因为uni.$emit和uni.$on触发的都是全局跨页面传参，所以需要及时的销毁事件监听，这时候就要使用了"),e(s,{style:{color:"red"}},{default:p(()=>[a("uni.$off")]),_:1}),a("， 比如页面onload里面uni.$on注册了监听，onUnload里面就使用uni.$off销毁监听。")]),T])}const w=l(c,[["render",k]]);export{D as __pageData,w as default};
