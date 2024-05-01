var Ne=Object.defineProperty;var Se=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ue=(e,t,n)=>(Se(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function H(){}function Pe(e,t){for(const n in t)e[n]=t[n];return e}function we(e){return e()}function xe(){return Object.create(null)}function R(e){e.forEach(we)}function Ce(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}function Be(e,t,n,s){if(e){const o=Le(e,t,n,s);return e[0](o)}}function Le(e,t,n,s){return e[1]&&s?Pe(n.ctx.slice(),e[1](s(t))):n.ctx}function Ie(e,t,n,s){if(e[2]&&s){const o=e[2](s(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const c=[],u=Math.max(t.dirty.length,o.length);for(let h=0;h<u;h+=1)c[h]=t.dirty[h]|o[h];return c}return t.dirty|o}return t.dirty}function qe(e,t,n,s,o,c){if(o){const u=Le(t,n,s,c);e.p(u,o)}}function De(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function G(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function Fe(e){return document.createTextNode(e)}function f(){return Fe(" ")}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ve(e){return Array.from(e.childNodes)}function ze(e,t,n,s){e.style.setProperty(t,n,"")}let Z;function T(e){Z=e}function Ge(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Ke(e){Ge().$$.on_mount.push(e)}const b=[],ve=[];let w=[];const $e=[],Re=Promise.resolve();let fe=!1;function Ue(){fe||(fe=!0,Re.then(Ee))}function pe(e){w.push(e)}const de=new Set;let $=0;function Ee(){if($!==0)return;const e=Z;do{try{for(;$<b.length;){const t=b[$];$++,T(t),Je(t.$$)}}catch(t){throw b.length=0,$=0,t}for(T(null),b.length=0,$=0;ve.length;)ve.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];de.has(n)||(de.add(n),n())}w.length=0}while(b.length);for(;$e.length;)$e.pop()();fe=!1,de.clear(),T(e)}function Je(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pe)}}function Qe(e){const t=[],n=[];w.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),w=t}const K=new Set;let We;function U(e,t){e&&e.i&&(K.delete(e),e.i(t))}function me(e,t,n,s){if(e&&e.o){if(K.has(e))return;K.add(e),We.c.push(()=>{K.delete(e)}),e.o(t)}}function Me(e){e&&e.c()}function ke(e,t,n){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),pe(()=>{const c=e.$$.on_mount.map(we).filter(Ce);e.$$.on_destroy?e.$$.on_destroy.push(...c):R(c),e.$$.on_mount=[]}),o.forEach(pe)}function _e(e,t){const n=e.$$;n.fragment!==null&&(Qe(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(b.push(e),Ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,s,o,c,u=null,h=[-1]){const m=Z;T(e);const p=e.$$={fragment:null,ctx:[],props:c,update:H,not_equal:o,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:xe(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};u&&u(p.root);let g=!1;if(p.ctx=n?n(e,t.props||{},(k,y,..._)=>{const x=_.length?_[0]:y;return p.ctx&&o(p.ctx[k],p.ctx[k]=x)&&(!p.skip_bound&&p.bound[k]&&p.bound[k](x),g&&Xe(e,k)),y}):[],p.update(),g=!0,R(p.before_update),p.fragment=s?s(p.ctx):!1,t.target){if(t.hydrate){const k=Ve(t.target);p.fragment&&p.fragment.l(k),k.forEach(r)}else p.fragment&&p.fragment.c();t.intro&&U(e.$$.fragment),ke(e,t.target,t.anchor),Ee()}T(m)}class ye{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){_e(this,1),this.$destroy=H}$on(t,n){if(!Ce(n))return H;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);const et="data:image/svg+xml,%3csvg%20width='489'%20xmlns='http://www.w3.org/2000/svg'%20height='343'%20viewBox='409%2086%20489%20343'%20fill='none'%3e%3cpath%20d='M676.361%20242.382h-50.502v-45.468h50.502v45.468Zm0-156.382h-50.502v46.463h50.502V86Zm59.745%20110.838h-50.501v45.468h50.501v-45.468Zm-119.415-55.189H566.19v46.003h50.501v-46.003Zm59.67%200h-50.502v46.003h50.502v-46.003Zm211.478%2076.545c-11.002-7.425-36.367-10.104-55.85-6.43-2.521-18.371-12.758-34.369-31.4-48.759l-10.696-7.119-7.106%2010.716c-14.058%2021.28-17.878%2056.338-2.827%2079.454-6.647%203.598-19.711%208.497-36.978%208.191H410.867c-6.647%2038.885%204.431%2089.405%2033.616%20124.08C472.828%20411.93%20515.307%20429%20570.851%20429c120.255%200%20209.262-55.495%20250.901-156.306%2016.35.306%2051.647.077%2069.754-34.598%201.146-1.914%205.042-10.104%206.494-13.09l-10.161-6.812Zm-390.486-21.356h-50.425v45.468h50.501l-.076-45.468Zm59.669%200h-50.501v45.468h50.501v-45.468Zm59.669%200H566.19v45.468h50.501v-45.468Zm-59.669-55.189h-50.501v46.003h50.501v-46.003Z'%20style='fill:%20%23439CE6;%20fill-opacity:%201;'%20class='fills'/%3e%3c/svg%3e",tt=e=>({id:e&1}),be=e=>({id:e[0]});function nt(e){let t;const n=e[2].default,s=Be(n,e,e[1],be);return{c(){s&&s.c()},m(o,c){s&&s.m(o,c),t=!0},p(o,[c]){s&&s.p&&(!t||c&3)&&qe(s,n,o,o[1],t?Ie(n,o[1],c,tt):De(o[1]),be)},i(o){t||(U(s,o),t=!0)},o(o){me(s,o),t=!1},d(o){s&&s.d(o)}}}function st(e,t,n){let{$$slots:s={},$$scope:o}=t,{id:c=""}=t;return e.$$set=u=>{"id"in u&&n(0,c=u.id),"$$scope"in u&&n(1,o=u.$$scope)},[c,o,s]}class ot extends ye{constructor(t){super(),ge(this,t,st,nt,he,{id:0})}}function lt(e){let t,n,s,o,c,u,h,m,p,g,k,y,_,x,A,J,N,Q,S,W,P,X,C,Oe=`<code class="language-bash"><span class="token function">docker</span> create  <span class="token operator">&lt;</span>name<span class="token operator">></span>
<span class="token function">docker</span> start <span class="token operator">&lt;</span>id<span class="token operator">></span>
<span class="token function">docker</span> start <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>id<span class="token operator">></span></code>`,Y,j,ee,B,te,I,ne,L,Te='<code class="language-bash"><span class="token function">docker</span> logs <span class="token operator">&lt;</span>id<span class="token operator">></span></code>',se,q,oe,E,He=`<code class="language-bash"><span class="token function">docker</span> stop <span class="token operator">&lt;</span>id<span class="token operator">></span> -<span class="token operator">></span> sigterm gracefully <span class="token function">shutdown</span> <span class="token punctuation">(</span>kill after <span class="token number">10</span> secs<span class="token punctuation">)</span>
<span class="token function">docker</span> <span class="token function">kill</span> <span class="token operator">&lt;</span>id<span class="token operator">></span> -<span class="token operator">></span> sigkill stops immediatly</code>`,le,D,re,F,ae,M,Ze=`<code class="language-bash"><span class="token parameter variable">-i</span> directs input <span class="token keyword">in</span> std <span class="token keyword">in</span>
<span class="token parameter variable">-t</span> <span class="token function">format</span> stuff</code>`,ie,V,ce,O,Ae=`<code class="language-bash"><span class="token punctuation">[</span>docker id<span class="token punctuation">]</span>/<span class="token punctuation">[</span>project<span class="token punctuation">]</span>:latest
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> alauhard/redis:latest <span class="token builtin class-name">.</span></code>`,z;return s=new ot({}),{c(){t=d("ul"),t.innerHTML='<li><a href="#1-start-docker-desktop">1. start docker desktop</a></li> <li><a href="#2-add-current-user-to-docker-group">2. add current user to docker group</a></li> <li><a href="#3-list-running-container">3. list running container</a></li> <li><a href="#4-list-all-started-containers">4. list all started containers</a></li> <li><a href="#5-docker-run">5. docker run</a></li> <li><a href="#6-docker-delete-containers">6. docker delete containers</a></li> <li><a href="#7-docker-logs---get-record-of-container-outputs">7. docker logs - get record of container outputs</a></li> <li><a href="#8-docker-stop-container">8. docker stop container</a></li> <li><a href="#9-docker-exec--it">9. docker exec -it</a></li> <li><a href="#10-tag-images">10. Tag images</a></li> <li><a href="#11-foooo">11. foooo</a></li>',n=f(),Me(s.$$.fragment),o=f(),c=d("h2"),c.textContent="1. start docker desktop",u=f(),h=d("p"),h.textContent="systemctl —user start docker-desktop",m=f(),p=d("h2"),p.textContent="2. add current user to docker group",g=f(),k=d("code"),k.textContent="sudo usermod -aG docker $user",y=f(),_=d("h2"),_.textContent="3. list running container",x=f(),A=d("p"),A.textContent="docker ps",J=f(),N=d("h2"),N.textContent="4. list all started containers",Q=f(),S=d("p"),S.textContent="docker ps —all",W=f(),P=d("h2"),P.textContent="5. docker run",X=f(),C=d("pre"),Y=f(),j=d("h2"),j.textContent="6. docker delete containers",ee=f(),B=d("p"),B.textContent="docker system prune",te=f(),I=d("h2"),I.textContent="7. docker logs - get record of container outputs",ne=f(),L=d("pre"),se=f(),q=d("h2"),q.textContent="8. docker stop container",oe=f(),E=d("pre"),le=f(),D=d("h2"),D.textContent="9. docker exec -it",re=f(),F=d("p"),F.textContent="execute additional command in a container",ae=f(),M=d("pre"),ie=f(),V=d("h2"),V.textContent="10. Tag images",ce=f(),O=d("pre"),v(k,"class","code-block"),ze(k,"font-weight","bolder"),v(C,"class","language-bash"),v(L,"class","language-bash"),v(E,"class","language-bash"),v(M,"class","language-bash"),v(O,"class","language-bash")},m(l,a){i(l,t,a),i(l,n,a),ke(s,l,a),i(l,o,a),i(l,c,a),i(l,u,a),i(l,h,a),i(l,m,a),i(l,p,a),i(l,g,a),i(l,k,a),i(l,y,a),i(l,_,a),i(l,x,a),i(l,A,a),i(l,J,a),i(l,N,a),i(l,Q,a),i(l,S,a),i(l,W,a),i(l,P,a),i(l,X,a),i(l,C,a),C.innerHTML=Oe,i(l,Y,a),i(l,j,a),i(l,ee,a),i(l,B,a),i(l,te,a),i(l,I,a),i(l,ne,a),i(l,L,a),L.innerHTML=Te,i(l,se,a),i(l,q,a),i(l,oe,a),i(l,E,a),E.innerHTML=He,i(l,le,a),i(l,D,a),i(l,re,a),i(l,F,a),i(l,ae,a),i(l,M,a),M.innerHTML=Ze,i(l,ie,a),i(l,V,a),i(l,ce,a),i(l,O,a),O.innerHTML=Ae,z=!0},p:H,i(l){z||(U(s.$$.fragment,l),z=!0)},o(l){me(s.$$.fragment,l),z=!1},d(l){l&&(r(t),r(n),r(o),r(c),r(u),r(h),r(m),r(p),r(g),r(k),r(y),r(_),r(x),r(A),r(J),r(N),r(Q),r(S),r(W),r(P),r(X),r(C),r(Y),r(j),r(ee),r(B),r(te),r(I),r(ne),r(L),r(se),r(q),r(oe),r(E),r(le),r(D),r(re),r(F),r(ae),r(M),r(ie),r(V),r(ce),r(O)),_e(s,l)}}}class rt extends ye{constructor(t){super(),ge(this,t,null,lt,he,{})}}function at(e){let t,n,s,o,c,u,h;return u=new rt({}),{c(){t=d("main"),n=d("h1"),n.textContent="Docker 101",s=f(),o=d("div"),o.innerHTML=`<a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${et}" class="logo svelte svelte-11x6k1u" alt="Svelte Logo"/></a>`,c=f(),Me(u.$$.fragment)},m(m,p){i(m,t,p),G(t,n),G(t,s),G(t,o),G(t,c),ke(u,t,null),h=!0},p:H,i(m){h||(U(u.$$.fragment,m),h=!0)},o(m){me(u.$$.fragment,m),h=!1},d(m){m&&r(t),_e(u)}}}function it(e){return Ke(()=>{let t=document.querySelectorAll("h1, h2, h3, h4, h5, h6");console.log(t);for(let n=0;n<t.length;n++){let s=t[n].textContent.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");t[n].setAttribute("id",s)}}),[]}class ct extends ye{constructor(t){super(),ge(this,t,it,at,he,{})}}new ct({target:document.getElementById("app")});
