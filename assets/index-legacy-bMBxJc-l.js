!(function () {
  const e = ["window"];
  function t(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var o,
            r,
            i,
            s,
            a = [],
            l = !0,
            c = !1;
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (o = i.call(n)).done) &&
                (a.push(o.value), a.length !== t);
                l = !0
              );
          } catch (e) {
            (c = !0), (r = e);
          } finally {
            try {
              if (!l && null != n.return && ((s = n.return()), Object(s) !== s))
                return;
            } finally {
              if (c) throw r;
            }
          }
          return a;
        }
      })(e, t) ||
      o(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function n(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = o(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var s,
      a = !0,
      l = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (l = !0), (s = e);
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (l) throw s;
        }
      },
    };
  }
  function o(e, t) {
    if (e) {
      if ("string" == typeof e) return r(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? r(e, t)
          : void 0
      );
    }
  }
  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  System.register([], function (o, r) {
    "use strict";
    return {
      execute: function () {
        var o = document.createElement("style");
        /**
         * @vue/shared v3.4.31
         * (c) 2018-present Yuxi (Evan) You and Vue contributors
         * @license MIT
         **/
        /*! #__NO_SIDE_EFFECTS__ */
        function i(e, t) {
          const n = new Set(e.split(","));
          return (e) => n.has(e);
        }
        (o.textContent =
          'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,button,video{margin:0;padding:0;border:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}a{text-decoration:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}:root{font-family:PingFang SC,Inter,Avenir,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#1f2429;color-scheme:dark;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;background:#f7f9fa;box-sizing:content-box;margin:0;padding:0;min-height:100vh}#app{width:100%;height:auto;padding:0;margin:0}@media screen and (max-width: 768px){#app{overflow:hidden;box-sizing:border-box}@supports (padding-bottom: constant(safe-area-inset-bottom)) or (padding-bottom: env(safe-area-inset-bottom)){#app{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}}}.btn{cursor:pointer;user-select:none}.btn:active{transform:scale(.95);transition:.1s linear}.btn.svg-icon:active{transform:scale(.9)}.scroll::-webkit-scrollbar{width:6px;height:6px}.scroll::-webkit-scrollbar-track{width:6px;background:transparent;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}.scroll::-webkit-scrollbar-thumb{background-color:rgba(144,147,153,.5);background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em;transition:background-color .3s;cursor:pointer;transform:translate(16px)}.scroll::-webkit-scrollbar-thumb:hover{background-color:rgba(144,147,153,.5)}.auto-zoom[data-v-722854c6]{width:var(--webkit-fill-available, 100%);flex-shrink:1;overflow:hidden}.auto-zoom[data-v-722854c6] *{box-sizing:border-box}.auto-zoom .scroll[data-v-722854c6]{width:var(--design-width--, 1920px);height:auto;zoom:var(--scale--, 1);transform-origin:left top;overflow-y:auto}.auto-zoom[data-v-722854c6] canvas{zoom:calc(1 / var(--scale--, 1))!important;transform:scale(var(--scale--, 1))!important;transform-origin:left top}.auto-scale[data-v-722854c6]{width:var(--webkit-fill-available, 100%);flex-shrink:1;overflow:hidden}.auto-scale[data-v-722854c6] *{box-sizing:content-box}.auto-scale .scroll[data-v-722854c6]{width:var(--design-width--, 1920px);height:auto;transform:scale(var(--scale--, 1));transform-origin:left top;overflow-y:auto}.landscape .part-1[data-v-14ad7f07]{position:relative}.landscape .part-1 .bg .left[data-v-14ad7f07]{width:1340px;height:966px;background:#161619;border-radius:0 0 260px}.landscape .part-1 .bg .right[data-v-14ad7f07]{position:absolute;right:0;top:0;width:946px;height:768px;border-radius:0 0 0 260px;background-color:#d0f8b0;background-image:linear-gradient(to right,#8ab26a,#8ab26a 30%,#d0f8b0);overflow:hidden}.landscape .part-1 .bg .right .image[data-v-14ad7f07]{position:absolute;left:30px;top:0;height:768px}.landscape .part-1 .navbar[data-v-14ad7f07]{margin:0 260px;height:96px;display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0}.landscape .part-1 .navbar .favicon[data-v-14ad7f07]{width:40px;height:40px;margin-right:14px}.landscape .part-1 .navbar .name[data-v-14ad7f07]{font-family:Roboto-Medium;font-weight:500;font-size:24px;color:#fff;letter-spacing:-.36px;line-height:28px}.landscape .part-1 .title[data-v-14ad7f07]{position:absolute;left:253px;top:259px}.landscape .part-1 .title h2[data-v-14ad7f07]{font-family:Arial-Black;font-weight:900;font-size:100px;color:#fff;line-height:124.47px}.landscape .part-1 .btn[data-v-14ad7f07]{width:252px;position:absolute;left:253px;top:601px}.landscape .part-1 .links[data-v-14ad7f07]{position:absolute;left:253px;top:873px}.landscape .part-1 .links a[data-v-14ad7f07]{font-family:Roboto-Regular;font-weight:400;font-size:18px;color:#b9b9b9;letter-spacing:-.27px;margin-right:70px;text-decoration:underline}.portrait .part-1[data-v-14ad7f07]{position:relative;width:360px;height:590px;background:#161619}.portrait .part-1 .navbar[data-v-14ad7f07]{margin:30px 22px;display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0}.portrait .part-1 .navbar .favicon[data-v-14ad7f07]{width:40px;height:40px;margin-right:14px}.portrait .part-1 .navbar .name[data-v-14ad7f07]{font-family:Roboto-Medium;font-weight:500;font-size:24px;color:#fff;letter-spacing:-.36px;line-height:28px}.portrait .part-1 .title[data-v-14ad7f07]{position:absolute;left:20px;top:168px}.portrait .part-1 .title h2[data-v-14ad7f07]{font-family:Arial-Black;font-weight:900;font-size:36.14px;color:#fff;letter-spacing:-.75px;line-height:44.99px}.portrait .part-1 .btn[data-v-14ad7f07]{width:210px;position:absolute;left:22px;top:317px}.portrait .part-1 .links[data-v-14ad7f07]{position:absolute;left:22px;top:512px}.portrait .part-1 .links a[data-v-14ad7f07]{font-family:Roboto-Regular;font-weight:400;font-size:15px;color:#b9b9b9;letter-spacing:-.22px;margin-right:41px;text-decoration:underline}.part-2[data-v-baf7e36e]{background-color:#d0f8b0}.part-2 .image[data-v-baf7e36e]{width:374.21px}.part-3[data-v-ac685fb0]{margin:94px auto 103px;display:flex;justify-content:center;align-items:center;font-family:Roboto-Black;font-weight:900;font-size:50px;color:#000;letter-spacing:-.75px;line-height:normal}.portrait .part-3[data-v-ac685fb0]{margin-top:48px;margin-bottom:50px;flex-flow:column nowrap}.portrait .part-3 span[data-v-ac685fb0]{font-family:Roboto-Black;font-weight:900;font-size:26px;color:#000;letter-spacing:-.39px;text-align:center;line-height:30px}.part-4[data-v-654964f3]{display:flex;justify-content:center;align-items:center;margin-bottom:90px}.part-4 .text[data-v-654964f3]{display:flex;flex-flow:column nowrap}.part-4 .text .title[data-v-654964f3]{font-family:Roboto-Bold;font-weight:700;font-size:46px;color:#000;letter-spacing:-.69px;line-height:normal}.part-4 .text .desc[data-v-654964f3]{margin-top:12px;font-family:PingFangTC-Regular;font-weight:400;font-size:24px;color:#6b6b88;letter-spacing:0;line-height:normal;width:465px}.part-4 .image[data-v-654964f3]{width:904px}.portrait .part-4[data-v-654964f3]{flex-flow:column nowrap}.portrait .part-4 .text[data-v-654964f3]{align-items:center}.portrait .part-4 .text .title[data-v-654964f3]{font-family:Roboto-Bold;font-weight:700;font-size:24px;color:#000;letter-spacing:-.36px;text-align:center}.portrait .part-4 .text .desc[data-v-654964f3]{margin-top:6px;font-family:PingFangTC-Regular;font-weight:400;font-size:14px;color:#6b6b88;letter-spacing:0;text-align:center;width:320px}.portrait .part-4 .image[data-v-654964f3]{width:348px}.part-5[data-v-42481bb5]{display:flex;justify-content:center;align-items:center;margin-bottom:90px;flex-flow:row-reverse nowrap}.part-5 .text[data-v-42481bb5]{display:flex;flex-flow:column nowrap}.part-5 .text .title[data-v-42481bb5]{font-family:Roboto-Bold;font-weight:700;font-size:46px;color:#000;letter-spacing:-.69px;line-height:normal}.part-5 .text .desc[data-v-42481bb5]{margin-top:12px;font-family:PingFangTC-Regular;font-weight:400;font-size:24px;color:#6b6b88;letter-spacing:0;line-height:normal;width:595px}.part-5 .image[data-v-42481bb5]{width:793px}.portrait .part-5[data-v-42481bb5]{flex-flow:column nowrap}.portrait .part-5 .text[data-v-42481bb5]{align-items:center}.portrait .part-5 .text .title[data-v-42481bb5]{font-family:Roboto-Bold;font-weight:700;font-size:24px;color:#000;letter-spacing:-.36px;text-align:center}.portrait .part-5 .text .desc[data-v-42481bb5]{margin-top:6px;font-family:PingFangTC-Regular;font-weight:400;font-size:14px;color:#6b6b88;letter-spacing:0;text-align:center;width:320px}.portrait .part-5 .image[data-v-42481bb5]{width:338px}.part-6[data-v-d68f9ce7]{display:flex;justify-content:center;align-items:center}.part-6 .text[data-v-d68f9ce7]{display:flex;flex-flow:column nowrap}.part-6 .text .title[data-v-d68f9ce7]{font-family:Roboto-Bold;font-weight:700;font-size:46px;color:#000;letter-spacing:-.69px;line-height:normal}.part-6 .text .desc[data-v-d68f9ce7]{margin-top:12px;font-family:PingFangTC-Regular;font-weight:400;font-size:24px;color:#6b6b88;letter-spacing:0;line-height:normal;width:485px}.part-6 .image[data-v-d68f9ce7]{width:758px}.portrait .part-6[data-v-d68f9ce7]{flex-flow:column nowrap}.portrait .part-6 .text[data-v-d68f9ce7]{align-items:center}.portrait .part-6 .text .title[data-v-d68f9ce7]{font-family:Roboto-Bold;font-weight:700;font-size:24px;color:#000;letter-spacing:-.36px;text-align:center}.portrait .part-6 .text .desc[data-v-d68f9ce7]{margin-top:6px;font-family:PingFangTC-Regular;font-weight:400;font-size:14px;color:#6b6b88;letter-spacing:0;text-align:center;width:260px}.portrait .part-6 .image[data-v-d68f9ce7]{width:324px}.landscape .footer[data-v-864723da]{margin-top:169px;height:126px;background:#000;position:relative;display:flex;flex-flow:column nowrap;padding:63px 260px}.landscape .footer p[data-v-864723da]{font-family:PingFangTC-Regular;font-weight:400;font-size:20px;color:#fff;letter-spacing:0;line-height:34px}.landscape .footer span[data-v-864723da]{font-family:PingFangTC-Regular;font-weight:400;font-size:20px;color:#fff;letter-spacing:0;text-align:right;line-height:normal;position:absolute;left:1468px;top:63px}.portrait .footer[data-v-864723da]{margin-top:56px;height:72px;background:#000;display:flex;flex-flow:column nowrap;position:relative;padding:12px 22px}.portrait .footer p[data-v-864723da]:nth-of-type(1){font-family:PingFangTC-Regular;font-weight:400;font-size:9px;color:#fff;letter-spacing:-.2px;line-height:normal}.portrait .footer p[data-v-864723da]:nth-of-type(2){margin-top:8px;font-family:PingFangTC-Regular;font-weight:400;font-size:9px;color:#a2a2a2;letter-spacing:-.2px;line-height:normal}.portrait .footer span[data-v-864723da]{font-family:PingFangTC-Regular;font-weight:400;font-size:9px;color:#fff;letter-spacing:0;text-align:right;line-height:normal;position:absolute;right:22px;top:12px}.container{width:100vw;height:auto;min-height:100%}.image.load[data-v-0af3a064]{filter:opacity(0)}.image.flat[data-v-0af3a064],.image.loaded[data-v-0af3a064]{filter:opacity(1)}.image.loaded[data-v-0af3a064]{transition:opacity .1s linear}.image.fail[data-v-0af3a064]{filter:opacity(1)}\n'),
          document.head.appendChild(o);
        const s = {},
          a = [],
          l = () => {},
          c = () => !1,
          u = (e) =>
            111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
          f = (e) => e.startsWith("onUpdate:"),
          p = Object.assign,
          d = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          },
          h = Object.prototype.hasOwnProperty,
          g = (e, t) => h.call(e, t),
          v = Array.isArray,
          m = (e) => "[object Map]" === C(e),
          b = (e) => "[object Set]" === C(e),
          y = (e) => "function" == typeof e,
          x = (e) => "string" == typeof e,
          _ = (e) => "symbol" == typeof e,
          w = (e) => null !== e && "object" == typeof e,
          k = (e) => (w(e) || y(e)) && y(e.then) && y(e.catch),
          S = Object.prototype.toString,
          C = (e) => S.call(e),
          O = (e) => C(e).slice(8, -1),
          R = (e) => "[object Object]" === C(e),
          E = (e) =>
            x(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
          P = i(
            ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
          ),
          F = (e) => {
            const t = Object.create(null);
            return (n) => t[n] || (t[n] = e(n));
          },
          T = /-(\w)/g,
          z = F((e) => e.replace(T, (e, t) => (t ? t.toUpperCase() : ""))),
          A = /\B([A-Z])/g,
          I = F((e) => e.replace(A, "-$1").toLowerCase()),
          L = F((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          j = F((e) => (e ? `on${L(e)}` : "")),
          M = (e, t) => !Object.is(e, t),
          U = (e, ...t) => {
            for (let n = 0; n < e.length; n++) e[n](...t);
          },
          N = (e, t, n, o = !1) => {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !1,
              writable: o,
              value: n,
            });
          },
          V = (e) => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t;
          };
        let $;
        const B = () =>
          $ ||
          ($ =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : {});
        function W(e) {
          if (v(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
              const o = e[n],
                r = x(o) ? G(o) : W(o);
              if (r) for (const e in r) t[e] = r[e];
            }
            return t;
          }
          if (x(e) || w(e)) return e;
        }
        const D = /;(?![^(]*\))/g,
          H = /:([^]+)/,
          q = /\/\*[^]*?\*\//g;
        function G(e) {
          const t = {};
          return (
            e
              .replace(q, "")
              .split(D)
              .forEach((e) => {
                if (e) {
                  const n = e.split(H);
                  n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
              }),
            t
          );
        }
        function K(e) {
          let t = "";
          if (x(e)) t = e;
          else if (v(e))
            for (let n = 0; n < e.length; n++) {
              const o = K(e[n]);
              o && (t += o + " ");
            }
          else if (w(e)) for (const n in e) e[n] && (t += n + " ");
          return t.trim();
        }
        const Y = i(
          "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
        );
        function X(e) {
          return !!e || "" === e;
        }
        /**
         * @vue/reactivity v3.4.31
         * (c) 2018-present Yuxi (Evan) You and Vue contributors
         * @license MIT
         **/ let Q, Z;
        class J {
          constructor(e = !1) {
            (this.detached = e),
              (this._active = !0),
              (this.effects = []),
              (this.cleanups = []),
              (this.parent = Q),
              !e &&
                Q &&
                (this.index = (Q.scopes || (Q.scopes = [])).push(this) - 1);
          }
          get active() {
            return this._active;
          }
          run(e) {
            if (this._active) {
              const t = Q;
              try {
                return (Q = this), e();
              } finally {
                Q = t;
              }
            }
          }
          on() {
            Q = this;
          }
          off() {
            Q = this.parent;
          }
          stop(e) {
            if (this._active) {
              let t, n;
              for (t = 0, n = this.effects.length; t < n; t++)
                this.effects[t].stop();
              for (t = 0, n = this.cleanups.length; t < n; t++)
                this.cleanups[t]();
              if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++)
                  this.scopes[t].stop(!0);
              if (!this.detached && this.parent && !e) {
                const e = this.parent.scopes.pop();
                e &&
                  e !== this &&
                  ((this.parent.scopes[this.index] = e),
                  (e.index = this.index));
              }
              (this.parent = void 0), (this._active = !1);
            }
          }
        }
        function ee() {
          return Q;
        }
        class te {
          constructor(e, t, n, o) {
            (this.fn = e),
              (this.trigger = t),
              (this.scheduler = n),
              (this.active = !0),
              (this.deps = []),
              (this._dirtyLevel = 4),
              (this._trackId = 0),
              (this._runnings = 0),
              (this._shouldSchedule = !1),
              (this._depsLength = 0),
              (function (e, t = Q) {
                t && t.active && t.effects.push(e);
              })(this, o);
          }
          get dirty() {
            if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
              (this._dirtyLevel = 1), le();
              for (let e = 0; e < this._depsLength; e++) {
                const t = this.deps[e];
                if (t.computed && (t.computed.value, this._dirtyLevel >= 4))
                  break;
              }
              1 === this._dirtyLevel && (this._dirtyLevel = 0), ce();
            }
            return this._dirtyLevel >= 4;
          }
          set dirty(e) {
            this._dirtyLevel = e ? 4 : 0;
          }
          run() {
            if (((this._dirtyLevel = 0), !this.active)) return this.fn();
            let e = ie,
              t = Z;
            try {
              return (
                (ie = !0), (Z = this), this._runnings++, ne(this), this.fn()
              );
            } finally {
              oe(this), this._runnings--, (Z = t), (ie = e);
            }
          }
          stop() {
            this.active &&
              (ne(this),
              oe(this),
              this.onStop && this.onStop(),
              (this.active = !1));
          }
        }
        function ne(e) {
          e._trackId++, (e._depsLength = 0);
        }
        function oe(e) {
          if (e.deps.length > e._depsLength) {
            for (let t = e._depsLength; t < e.deps.length; t++)
              re(e.deps[t], e);
            e.deps.length = e._depsLength;
          }
        }
        function re(e, t) {
          const n = e.get(t);
          void 0 !== n &&
            t._trackId !== n &&
            (e.delete(t), 0 === e.size && e.cleanup());
        }
        let ie = !0,
          se = 0;
        const ae = [];
        function le() {
          ae.push(ie), (ie = !1);
        }
        function ce() {
          const e = ae.pop();
          ie = void 0 === e || e;
        }
        function ue() {
          se++;
        }
        function fe() {
          for (se--; !se && de.length; ) de.shift()();
        }
        function pe(e, t, n) {
          if (t.get(e) !== e._trackId) {
            t.set(e, e._trackId);
            const n = e.deps[e._depsLength];
            n !== t
              ? (n && re(n, e), (e.deps[e._depsLength++] = t))
              : e._depsLength++;
          }
        }
        const de = [];
        function he(e, t, o) {
          ue();
          var r,
            i = n(e.keys());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              const n = r.value;
              let o;
              n._dirtyLevel < t &&
                (null != o ? o : (o = e.get(n) === n._trackId)) &&
                (n._shouldSchedule || (n._shouldSchedule = 0 === n._dirtyLevel),
                (n._dirtyLevel = t)),
                n._shouldSchedule &&
                  (null != o ? o : (o = e.get(n) === n._trackId)) &&
                  (n.trigger(),
                  (n._runnings && !n.allowRecurse) ||
                    2 === n._dirtyLevel ||
                    ((n._shouldSchedule = !1),
                    n.scheduler && de.push(n.scheduler)));
            }
          } catch (s) {
            i.e(s);
          } finally {
            i.f();
          }
          fe();
        }
        const ge = (e, t) => {
            const n = new Map();
            return (n.cleanup = e), (n.computed = t), n;
          },
          ve = new WeakMap(),
          me = Symbol(""),
          be = Symbol("");
        function ye(e, t, n) {
          if (ie && Z) {
            let t = ve.get(e);
            t || ve.set(e, (t = new Map()));
            let o = t.get(n);
            o || t.set(n, (o = ge(() => t.delete(n)))), pe(Z, o);
          }
        }
        function xe(e, t, n, o, r, i) {
          const s = ve.get(e);
          if (!s) return;
          let a = [];
          if ("clear" === t) a = [...s.values()];
          else if ("length" === n && v(e)) {
            const e = Number(o);
            s.forEach((t, n) => {
              ("length" === n || (!_(n) && n >= e)) && a.push(t);
            });
          } else
            switch ((void 0 !== n && a.push(s.get(n)), t)) {
              case "add":
                v(e)
                  ? E(n) && a.push(s.get("length"))
                  : (a.push(s.get(me)), m(e) && a.push(s.get(be)));
                break;
              case "delete":
                v(e) || (a.push(s.get(me)), m(e) && a.push(s.get(be)));
                break;
              case "set":
                m(e) && a.push(s.get(me));
            }
          ue();
          for (var l = 0, c = a; l < c.length; l++) {
            const e = c[l];
            e && he(e, 4);
          }
          fe();
        }
        const _e = i("__proto__,__v_isRef,__isVue"),
          we = new Set(
            Object.getOwnPropertyNames(Symbol)
              .filter((e) => "arguments" !== e && "caller" !== e)
              .map((e) => Symbol[e])
              .filter(_)
          ),
          ke = Se();
        function Se() {
          const e = {};
          return (
            ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
              e[t] = function (...e) {
                const n = ft(this);
                for (let t = 0, r = this.length; t < r; t++) ye(n, 0, t + "");
                const o = n[t](...e);
                return -1 === o || !1 === o ? n[t](...e.map(ft)) : o;
              };
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
              e[t] = function (...e) {
                le(), ue();
                const n = ft(this)[t].apply(this, e);
                return fe(), ce(), n;
              };
            }),
            e
          );
        }
        function Ce(e) {
          _(e) || (e = String(e));
          const t = ft(this);
          return ye(t, 0, e), t.hasOwnProperty(e);
        }
        class Oe {
          constructor(e = !1, t = !1) {
            (this._isReadonly = e), (this._isShallow = t);
          }
          get(e, t, n) {
            const o = this._isReadonly,
              r = this._isShallow;
            if ("__v_isReactive" === t) return !o;
            if ("__v_isReadonly" === t) return o;
            if ("__v_isShallow" === t) return r;
            if ("__v_raw" === t)
              return n === (o ? (r ? ot : nt) : r ? tt : et).get(e) ||
                Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
                ? e
                : void 0;
            const i = v(e);
            if (!o) {
              if (i && g(ke, t)) return Reflect.get(ke, t, n);
              if ("hasOwnProperty" === t) return Ce;
            }
            const s = Reflect.get(e, t, n);
            return (_(t) ? we.has(t) : _e(t))
              ? s
              : (o || ye(e, 0, t),
                r
                  ? s
                  : mt(s)
                  ? i && E(t)
                    ? s
                    : s.value
                  : w(s)
                  ? o
                    ? it(s)
                    : rt(s)
                  : s);
          }
        }
        class Re extends Oe {
          constructor(e = !1) {
            super(!1, e);
          }
          set(e, t, n, o) {
            let r = e[t];
            if (!this._isShallow) {
              const t = lt(r);
              if (
                (ct(n) || lt(n) || ((r = ft(r)), (n = ft(n))),
                !v(e) && mt(r) && !mt(n))
              )
                return !t && ((r.value = n), !0);
            }
            const i = v(e) && E(t) ? Number(t) < e.length : g(e, t),
              s = Reflect.set(e, t, n, o);
            return (
              e === ft(o) &&
                (i ? M(n, r) && xe(e, "set", t, n) : xe(e, "add", t, n)),
              s
            );
          }
          deleteProperty(e, t) {
            const n = g(e, t);
            e[t];
            const o = Reflect.deleteProperty(e, t);
            return o && n && xe(e, "delete", t, void 0), o;
          }
          has(e, t) {
            const n = Reflect.has(e, t);
            return (_(t) && we.has(t)) || ye(e, 0, t), n;
          }
          ownKeys(e) {
            return ye(e, 0, v(e) ? "length" : me), Reflect.ownKeys(e);
          }
        }
        class Ee extends Oe {
          constructor(e = !1) {
            super(!0, e);
          }
          set(e, t) {
            return !0;
          }
          deleteProperty(e, t) {
            return !0;
          }
        }
        const Pe = new Re(),
          Fe = new Ee(),
          Te = new Re(!0),
          ze = (e) => e,
          Ae = (e) => Reflect.getPrototypeOf(e);
        function Ie(e, t, n = !1, o = !1) {
          const r = ft((e = e.__v_raw)),
            i = ft(t);
          n || (M(t, i) && ye(r, 0, t), ye(r, 0, i));
          const s = Ae(r).has,
            a = o ? ze : n ? dt : pt;
          return s.call(r, t)
            ? a(e.get(t))
            : s.call(r, i)
            ? a(e.get(i))
            : void (e !== r && e.get(t));
        }
        function Le(e, t = !1) {
          const n = this.__v_raw,
            o = ft(n),
            r = ft(e);
          return (
            t || (M(e, r) && ye(o, 0, e), ye(o, 0, r)),
            e === r ? n.has(e) : n.has(e) || n.has(r)
          );
        }
        function je(e, t = !1) {
          return (
            (e = e.__v_raw), !t && ye(ft(e), 0, me), Reflect.get(e, "size", e)
          );
        }
        function Me(e) {
          e = ft(e);
          const t = ft(this);
          return Ae(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
        }
        function Ue(e, t) {
          t = ft(t);
          const n = ft(this),
            o = Ae(n),
            r = o.has,
            i = o.get;
          let s = r.call(n, e);
          s || ((e = ft(e)), (s = r.call(n, e)));
          const a = i.call(n, e);
          return (
            n.set(e, t),
            s ? M(t, a) && xe(n, "set", e, t) : xe(n, "add", e, t),
            this
          );
        }
        function Ne(e) {
          const t = ft(this),
            n = Ae(t),
            o = n.has,
            r = n.get;
          let i = o.call(t, e);
          i || ((e = ft(e)), (i = o.call(t, e))), r && r.call(t, e);
          const s = t.delete(e);
          return i && xe(t, "delete", e, void 0), s;
        }
        function Ve() {
          const e = ft(this),
            t = 0 !== e.size,
            n = e.clear();
          return t && xe(e, "clear", void 0, void 0), n;
        }
        function $e(e, t) {
          return function (n, o) {
            const r = this,
              i = r.__v_raw,
              s = ft(i),
              a = t ? ze : e ? dt : pt;
            return (
              !e && ye(s, 0, me), i.forEach((e, t) => n.call(o, a(e), a(t), r))
            );
          };
        }
        function Be(e, t, n) {
          return function (...o) {
            const r = this.__v_raw,
              i = ft(r),
              s = m(i),
              a = "entries" === e || (e === Symbol.iterator && s),
              l = "keys" === e && s,
              c = r[e](...o),
              u = n ? ze : t ? dt : pt;
            return (
              !t && ye(i, 0, l ? be : me),
              {
                next() {
                  const e = c.next(),
                    t = e.value,
                    n = e.done;
                  return n
                    ? { value: t, done: n }
                    : { value: a ? [u(t[0]), u(t[1])] : u(t), done: n };
                },
                [Symbol.iterator]() {
                  return this;
                },
              }
            );
          };
        }
        function We(e) {
          return function (...t) {
            return "delete" !== e && ("clear" === e ? void 0 : this);
          };
        }
        function De() {
          const e = {
              get(e) {
                return Ie(this, e);
              },
              get size() {
                return je(this);
              },
              has: Le,
              add: Me,
              set: Ue,
              delete: Ne,
              clear: Ve,
              forEach: $e(!1, !1),
            },
            t = {
              get(e) {
                return Ie(this, e, !1, !0);
              },
              get size() {
                return je(this);
              },
              has: Le,
              add: Me,
              set: Ue,
              delete: Ne,
              clear: Ve,
              forEach: $e(!1, !0),
            },
            n = {
              get(e) {
                return Ie(this, e, !0);
              },
              get size() {
                return je(this, !0);
              },
              has(e) {
                return Le.call(this, e, !0);
              },
              add: We("add"),
              set: We("set"),
              delete: We("delete"),
              clear: We("clear"),
              forEach: $e(!0, !1),
            },
            o = {
              get(e) {
                return Ie(this, e, !0, !0);
              },
              get size() {
                return je(this, !0);
              },
              has(e) {
                return Le.call(this, e, !0);
              },
              add: We("add"),
              set: We("set"),
              delete: We("delete"),
              clear: We("clear"),
              forEach: $e(!0, !0),
            };
          return (
            ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
              (e[r] = Be(r, !1, !1)),
                (n[r] = Be(r, !0, !1)),
                (t[r] = Be(r, !1, !0)),
                (o[r] = Be(r, !0, !0));
            }),
            [e, n, t, o]
          );
        }
        const He = t(De(), 4),
          qe = He[0],
          Ge = He[1],
          Ke = He[2],
          Ye = He[3];
        function Xe(e, t) {
          const n = t ? (e ? Ye : Ke) : e ? Ge : qe;
          return (t, o, r) =>
            "__v_isReactive" === o
              ? !e
              : "__v_isReadonly" === o
              ? e
              : "__v_raw" === o
              ? t
              : Reflect.get(g(n, o) && o in t ? n : t, o, r);
        }
        const Qe = { get: Xe(!1, !1) },
          Ze = { get: Xe(!1, !0) },
          Je = { get: Xe(!0, !1) },
          et = new WeakMap(),
          tt = new WeakMap(),
          nt = new WeakMap(),
          ot = new WeakMap();
        function rt(e) {
          return lt(e) ? e : st(e, !1, Pe, Qe, et);
        }
        function it(e) {
          return st(e, !0, Fe, Je, nt);
        }
        function st(e, t, n, o, r) {
          if (!w(e)) return e;
          if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
          const i = r.get(e);
          if (i) return i;
          const s =
            (a = e).__v_skip || !Object.isExtensible(a)
              ? 0
              : (function (e) {
                  switch (e) {
                    case "Object":
                    case "Array":
                      return 1;
                    case "Map":
                    case "Set":
                    case "WeakMap":
                    case "WeakSet":
                      return 2;
                    default:
                      return 0;
                  }
                })(O(a));
          var a;
          if (0 === s) return e;
          const l = new Proxy(e, 2 === s ? o : n);
          return r.set(e, l), l;
        }
        function at(e) {
          return lt(e) ? at(e.__v_raw) : !(!e || !e.__v_isReactive);
        }
        function lt(e) {
          return !(!e || !e.__v_isReadonly);
        }
        function ct(e) {
          return !(!e || !e.__v_isShallow);
        }
        function ut(e) {
          return !!e && !!e.__v_raw;
        }
        function ft(e) {
          const t = e && e.__v_raw;
          return t ? ft(t) : e;
        }
        const pt = (e) => (w(e) ? rt(e) : e),
          dt = (e) => (w(e) ? it(e) : e);
        class ht {
          constructor(e, t, n, o) {
            (this.getter = e),
              (this._setter = t),
              (this.dep = void 0),
              (this.__v_isRef = !0),
              (this.__v_isReadonly = !1),
              (this.effect = new te(
                () => e(this._value),
                () => vt(this, 2 === this.effect._dirtyLevel ? 2 : 3)
              )),
              (this.effect.computed = this),
              (this.effect.active = this._cacheable = !o),
              (this.__v_isReadonly = n);
          }
          get value() {
            const e = ft(this);
            return (
              (e._cacheable && !e.effect.dirty) ||
                !M(e._value, (e._value = e.effect.run())) ||
                vt(e, 4),
              gt(e),
              e.effect._dirtyLevel >= 2 && vt(e, 2),
              e._value
            );
          }
          set value(e) {
            this._setter(e);
          }
          get _dirty() {
            return this.effect.dirty;
          }
          set _dirty(e) {
            this.effect.dirty = e;
          }
        }
        function gt(e) {
          var t;
          ie &&
            Z &&
            ((e = ft(e)),
            pe(
              Z,
              null != (t = e.dep)
                ? t
                : (e.dep = ge(
                    () => (e.dep = void 0),
                    e instanceof ht ? e : void 0
                  ))
            ));
        }
        function vt(e, t = 4, n, o) {
          const r = (e = ft(e)).dep;
          r && he(r, t);
        }
        function mt(e) {
          return !(!e || !0 !== e.__v_isRef);
        }
        function bt(e) {
          return (function (e, t) {
            if (mt(e)) return e;
            return new yt(e, t);
          })(e, !1);
        }
        class yt {
          constructor(e, t) {
            (this.__v_isShallow = t),
              (this.dep = void 0),
              (this.__v_isRef = !0),
              (this._rawValue = t ? e : ft(e)),
              (this._value = t ? e : pt(e));
          }
          get value() {
            return gt(this), this._value;
          }
          set value(e) {
            const t = this.__v_isShallow || ct(e) || lt(e);
            (e = t ? e : ft(e)),
              M(e, this._rawValue) &&
                (this._rawValue,
                (this._rawValue = e),
                (this._value = t ? e : pt(e)),
                vt(this, 4));
          }
        }
        function xt(e) {
          return mt(e) ? e.value : e;
        }
        const _t = {
          get: (e, t, n) => xt(Reflect.get(e, t, n)),
          set: (e, t, n, o) => {
            const r = e[t];
            return mt(r) && !mt(n)
              ? ((r.value = n), !0)
              : Reflect.set(e, t, n, o);
          },
        };
        function wt(e) {
          return at(e) ? e : new Proxy(e, _t);
        }
        /**
         * @vue/runtime-core v3.4.31
         * (c) 2018-present Yuxi (Evan) You and Vue contributors
         * @license MIT
         **/ function kt(e, t, n, o) {
          try {
            return o ? e(...o) : e();
          } catch (r) {
            Ct(r, t, n);
          }
        }
        function St(e, t, n, o) {
          if (y(e)) {
            const r = kt(e, t, n, o);
            return (
              r &&
                k(r) &&
                r.catch((e) => {
                  Ct(e, t, n);
                }),
              r
            );
          }
          if (v(e)) {
            const r = [];
            for (let i = 0; i < e.length; i++) r.push(St(e[i], t, n, o));
            return r;
          }
        }
        function Ct(e, t, n, o = !0) {
          t && t.vnode;
          if (t) {
            let o = t.parent;
            const r = t.proxy,
              i = `https://vuejs.org/error-reference/#runtime-${n}`;
            for (; o; ) {
              const t = o.ec;
              if (t)
                for (let n = 0; n < t.length; n++)
                  if (!1 === t[n](e, r, i)) return;
              o = o.parent;
            }
            const s = t.appContext.config.errorHandler;
            if (s) return le(), kt(s, null, 10, [e, r, i]), void ce();
          }
          !(function (e, t, n, o = !0) {
            console.error(e);
          })(e, 0, 0, o);
        }
        let Ot = !1,
          Rt = !1;
        const Et = [];
        let Pt = 0;
        const Ft = [];
        let Tt = null,
          zt = 0;
        const At = Promise.resolve();
        let It = null;
        function Lt(e) {
          const t = It || At;
          return e ? t.then(this ? e.bind(this) : e) : t;
        }
        function jt(e) {
          (Et.length && Et.includes(e, Ot && e.allowRecurse ? Pt + 1 : Pt)) ||
            (null == e.id
              ? Et.push(e)
              : Et.splice(
                  (function (e) {
                    let t = Pt + 1,
                      n = Et.length;
                    for (; t < n; ) {
                      const o = (t + n) >>> 1,
                        r = Et[o],
                        i = Vt(r);
                      i < e || (i === e && r.pre) ? (t = o + 1) : (n = o);
                    }
                    return t;
                  })(e.id),
                  0,
                  e
                ),
            Mt());
        }
        function Mt() {
          Ot || Rt || ((Rt = !0), (It = At.then(Bt)));
        }
        function Ut(e, t, n = Ot ? Pt + 1 : 0) {
          for (; n < Et.length; n++) {
            const t = Et[n];
            if (t && t.pre) {
              if (e && t.id !== e.uid) continue;
              Et.splice(n, 1), n--, t();
            }
          }
        }
        function Nt(e) {
          if (Ft.length) {
            const e = [...new Set(Ft)].sort((e, t) => Vt(e) - Vt(t));
            if (((Ft.length = 0), Tt)) return void Tt.push(...e);
            for (Tt = e, zt = 0; zt < Tt.length; zt++) {
              const e = Tt[zt];
              !1 !== e.active && e();
            }
            (Tt = null), (zt = 0);
          }
        }
        const Vt = (e) => (null == e.id ? 1 / 0 : e.id),
          $t = (e, t) => {
            const n = Vt(e) - Vt(t);
            if (0 === n) {
              if (e.pre && !t.pre) return -1;
              if (t.pre && !e.pre) return 1;
            }
            return n;
          };
        function Bt(e) {
          (Rt = !1), (Ot = !0), Et.sort($t);
          try {
            for (Pt = 0; Pt < Et.length; Pt++) {
              const e = Et[Pt];
              e && !1 !== e.active && kt(e, null, 14);
            }
          } finally {
            (Pt = 0),
              (Et.length = 0),
              Nt(),
              (Ot = !1),
              (It = null),
              (Et.length || Ft.length) && Bt();
          }
        }
        function Wt(e, t, ...n) {
          if (e.isUnmounted) return;
          const o = e.vnode.props || s;
          let r = n;
          const i = t.startsWith("update:"),
            a = i && t.slice(7);
          if (a && a in o) {
            const e = o[`${"modelValue" === a ? "model" : a}Modifiers`] || s,
              t = e.number;
            e.trim && (r = n.map((e) => (x(e) ? e.trim() : e))),
              t && (r = n.map(V));
          }
          let l,
            c = o[(l = j(t))] || o[(l = j(z(t)))];
          !c && i && (c = o[(l = j(I(t)))]), c && St(c, e, 6, r);
          const u = o[l + "Once"];
          if (u) {
            if (e.emitted) {
              if (e.emitted[l]) return;
            } else e.emitted = {};
            (e.emitted[l] = !0), St(u, e, 6, r);
          }
        }
        function Dt(e, t, n = !1) {
          const o = t.emitsCache,
            r = o.get(e);
          if (void 0 !== r) return r;
          const i = e.emits;
          let s = {},
            a = !1;
          if (!y(e)) {
            const o = (e) => {
              const n = Dt(e, t, !0);
              n && ((a = !0), p(s, n));
            };
            !n && t.mixins.length && t.mixins.forEach(o),
              e.extends && o(e.extends),
              e.mixins && e.mixins.forEach(o);
          }
          return i || a
            ? (v(i) ? i.forEach((e) => (s[e] = null)) : p(s, i),
              w(e) && o.set(e, s),
              s)
            : (w(e) && o.set(e, null), null);
        }
        function Ht(e, t) {
          return (
            !(!e || !u(t)) &&
            ((t = t.slice(2).replace(/Once$/, "")),
            g(e, t[0].toLowerCase() + t.slice(1)) || g(e, I(t)) || g(e, t))
          );
        }
        let qt = null,
          Gt = null;
        function Kt(e) {
          const t = qt;
          return (qt = e), (Gt = (e && e.type.__scopeId) || null), t;
        }
        function Yt(e) {
          Gt = e;
        }
        function Xt() {
          Gt = null;
        }
        function Qt(e, t = qt, n) {
          if (!t) return e;
          if (e._n) return e;
          const o = (...n) => {
            o._d && $o(-1);
            const r = Kt(t);
            let i;
            try {
              i = e(...n);
            } finally {
              Kt(r), o._d && $o(1);
            }
            return i;
          };
          return (o._n = !0), (o._c = !0), (o._d = !0), o;
        }
        function Zt(e) {
          const n = e.type,
            o = e.vnode,
            r = e.proxy,
            i = e.withProxy,
            s = t(e.propsOptions, 1)[0],
            a = e.slots,
            l = e.attrs,
            c = e.emit,
            u = e.render,
            p = e.renderCache,
            d = e.props,
            h = e.data,
            g = e.setupState,
            v = e.ctx,
            m = e.inheritAttrs,
            b = Kt(e);
          let y, x;
          try {
            if (4 & o.shapeFlag) {
              const e = i || r,
                t = e;
              (y = er(u.call(t, e, p, d, g, h, v))), (x = l);
            } else {
              const e = n;
              0,
                (y = er(
                  e.length > 1
                    ? e(d, { attrs: l, slots: a, emit: c })
                    : e(d, null)
                )),
                (x = n.props ? l : Jt(l));
            }
          } catch (w) {
            (Mo.length = 0), Ct(w, e, 1), (y = Xo(Lo));
          }
          let _ = y;
          if (x && !1 !== m) {
            const e = Object.keys(x),
              t = _.shapeFlag;
            e.length &&
              7 & t &&
              (s && e.some(f) && (x = en(x, s)), (_ = Qo(_, x, !1, !0)));
          }
          return (
            o.dirs &&
              ((_ = Qo(_, null, !1, !0)),
              (_.dirs = _.dirs ? _.dirs.concat(o.dirs) : o.dirs)),
            o.transition && (_.transition = o.transition),
            (y = _),
            Kt(b),
            y
          );
        }
        const Jt = (e) => {
            let t;
            for (const n in e)
              ("class" === n || "style" === n || u(n)) &&
                ((t || (t = {}))[n] = e[n]);
            return t;
          },
          en = (e, t) => {
            const n = {};
            for (const o in e) (f(o) && o.slice(9) in t) || (n[o] = e[o]);
            return n;
          };
        function tn(e, t, n) {
          const o = Object.keys(t);
          if (o.length !== Object.keys(e).length) return !0;
          for (let r = 0; r < o.length; r++) {
            const i = o[r];
            if (t[i] !== e[i] && !Ht(n, i)) return !0;
          }
          return !1;
        }
        function nn(e, t) {
          return (
            (function (e, t, n = !0, o = !1) {
              const r = qt || ar;
              if (r) {
                const n = r.type;
                {
                  const e = xr(n, !1);
                  if (e && (e === t || e === z(t) || e === L(z(t)))) return n;
                }
                const i = rn(r[e] || n[e], t) || rn(r.appContext[e], t);
                return !i && o ? n : i;
              }
            })("components", e, !0, t) || e
          );
        }
        const on = Symbol.for("v-ndc");
        function rn(e, t) {
          return e && (e[t] || e[z(t)] || e[L(z(t))]);
        }
        function sn(e, t, n = ar, o = !1) {
          if (n) {
            const r = n[e] || (n[e] = []),
              i =
                t.__weh ||
                (t.__weh = (...o) => {
                  le();
                  const r = fr(n),
                    i = St(t, n, e, o);
                  return r(), ce(), i;
                });
            return o ? r.unshift(i) : r.push(i), i;
          }
        }
        const an =
            (e) =>
            (t, n = ar) => {
              (gr && "sp" !== e) || sn(e, (...e) => t(...e), n);
            },
          ln = an("bm"),
          cn = an("m"),
          un = an("bu"),
          fn = an("u"),
          pn = an("bum"),
          dn = an("um"),
          hn = an("sp"),
          gn = an("rtg"),
          vn = an("rtc");
        function mn(e, t = ar) {
          sn("ec", e, t);
        }
        function bn(e, t, n, o) {
          const r = e.dirs,
            i = t && t.dirs;
          for (let s = 0; s < r.length; s++) {
            const a = r[s];
            i && (a.oldValue = i[s].value);
            let l = a.dir[o];
            l && (le(), St(l, n, 8, [e.el, a, e, t]), ce());
          }
        }
        /*! #__NO_SIDE_EFFECTS__ */ function yn(e, t) {
          return y(e) ? (() => p({ name: e.name }, t, { setup: e }))() : e;
        }
        const xn = (e) => !!e.type.__asyncLoader;
        function _n(e, t, n = {}, o, r) {
          if (qt.isCE || (qt.parent && xn(qt.parent) && qt.parent.isCE))
            return Xo("slot", n, o);
          let i = e[t];
          i && i._c && (i._d = !1), No();
          const s = i && wn(i(n)),
            a = Do(
              Ao,
              { key: n.key || (s && s.key) || `_${t}` },
              s || [],
              s && 1 === e._ ? 64 : -2
            );
          return i && i._c && (i._d = !0), a;
        }
        function wn(e) {
          return e.some(
            (e) =>
              !Ho(e) || (e.type !== Lo && !(e.type === Ao && !wn(e.children)))
          )
            ? e
            : null;
        }
        const kn = (e) => (e ? (dr(e) ? yr(e) : kn(e.parent)) : null),
          Sn = p(Object.create(null), {
            $: (e) => e,
            $el: (e) => e.vnode.el,
            $data: (e) => e.data,
            $props: (e) => e.props,
            $attrs: (e) => e.attrs,
            $slots: (e) => e.slots,
            $refs: (e) => e.refs,
            $parent: (e) => kn(e.parent),
            $root: (e) => kn(e.root),
            $emit: (e) => e.emit,
            $options: (e) => zn(e),
            $forceUpdate: (e) =>
              e.f ||
              (e.f = () => {
                (e.effect.dirty = !0), jt(e.update);
              }),
            $nextTick: (e) => e.n || (e.n = Lt.bind(e.proxy)),
            $watch: (e) => So.bind(e),
          }),
          Cn = (e, t) => e !== s && !e.__isScriptSetup && g(e, t),
          On = {
            get({ _: e }, t) {
              if ("__v_skip" === t) return !0;
              const n = e.ctx,
                o = e.setupState,
                r = e.data,
                i = e.props,
                a = e.accessCache,
                l = e.type,
                c = e.appContext;
              let u;
              if ("$" !== t[0]) {
                const l = a[t];
                if (void 0 !== l)
                  switch (l) {
                    case 1:
                      return o[t];
                    case 2:
                      return r[t];
                    case 4:
                      return n[t];
                    case 3:
                      return i[t];
                  }
                else {
                  if (Cn(o, t)) return (a[t] = 1), o[t];
                  if (r !== s && g(r, t)) return (a[t] = 2), r[t];
                  if ((u = e.propsOptions[0]) && g(u, t))
                    return (a[t] = 3), i[t];
                  if (n !== s && g(n, t)) return (a[t] = 4), n[t];
                  En && (a[t] = 0);
                }
              }
              const f = Sn[t];
              let p, d;
              return f
                ? ("$attrs" === t && ye(e.attrs, 0, ""), f(e))
                : (p = l.__cssModules) && (p = p[t])
                ? p
                : n !== s && g(n, t)
                ? ((a[t] = 4), n[t])
                : ((d = c.config.globalProperties), g(d, t) ? d[t] : void 0);
            },
            set({ _: e }, t, n) {
              const o = e.data,
                r = e.setupState,
                i = e.ctx;
              return Cn(r, t)
                ? ((r[t] = n), !0)
                : o !== s && g(o, t)
                ? ((o[t] = n), !0)
                : !g(e.props, t) &&
                  ("$" !== t[0] || !(t.slice(1) in e)) &&
                  ((i[t] = n), !0);
            },
            has(
              {
                _: {
                  data: e,
                  setupState: t,
                  accessCache: n,
                  ctx: o,
                  appContext: r,
                  propsOptions: i,
                },
              },
              a
            ) {
              let l;
              return (
                !!n[a] ||
                (e !== s && g(e, a)) ||
                Cn(t, a) ||
                ((l = i[0]) && g(l, a)) ||
                g(o, a) ||
                g(Sn, a) ||
                g(r.config.globalProperties, a)
              );
            },
            defineProperty(e, t, n) {
              return (
                null != n.get
                  ? (e._.accessCache[t] = 0)
                  : g(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
              );
            },
          };
        function Rn(e) {
          return v(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
        }
        let En = !0;
        function Pn(e) {
          const t = zn(e),
            n = e.proxy,
            o = e.ctx;
          (En = !1), t.beforeCreate && Fn(t.beforeCreate, e, "bc");
          const r = t.data,
            i = t.computed,
            s = t.methods,
            a = t.watch,
            c = t.provide,
            u = t.inject,
            f = t.created,
            p = t.beforeMount,
            d = t.mounted,
            h = t.beforeUpdate,
            g = t.updated,
            m = t.activated,
            b = t.deactivated,
            x = (t.beforeDestroy, t.beforeUnmount),
            _ = (t.destroyed, t.unmounted),
            k = t.render,
            S = t.renderTracked,
            C = t.renderTriggered,
            O = t.errorCaptured,
            R = t.serverPrefetch,
            E = t.expose,
            P = t.inheritAttrs,
            F = t.components,
            T = t.directives;
          t.filters;
          if (
            (u &&
              (function (e, t, n = l) {
                v(e) && (e = jn(e));
                for (const o in e) {
                  const n = e[o];
                  let r;
                  (r = w(n)
                    ? "default" in n
                      ? Hn(n.from || o, n.default, !0)
                      : Hn(n.from || o)
                    : Hn(n)),
                    mt(r)
                      ? Object.defineProperty(t, o, {
                          enumerable: !0,
                          configurable: !0,
                          get: () => r.value,
                          set: (e) => (r.value = e),
                        })
                      : (t[o] = r);
                }
              })(u, o, null),
            s)
          )
            for (const l in s) {
              const e = s[l];
              y(e) && (o[l] = e.bind(n));
            }
          if (r) {
            const t = r.call(n, n);
            w(t) && (e.data = rt(t));
          }
          if (((En = !0), i))
            for (const v in i) {
              const e = i[v],
                t = y(e) ? e.bind(n, n) : y(e.get) ? e.get.bind(n, n) : l,
                r = !y(e) && y(e.set) ? e.set.bind(n) : l,
                s = _r({ get: t, set: r });
              Object.defineProperty(o, v, {
                enumerable: !0,
                configurable: !0,
                get: () => s.value,
                set: (e) => (s.value = e),
              });
            }
          if (a) for (const l in a) Tn(a[l], o, n, l);
          if (c) {
            const e = y(c) ? c.call(n) : c;
            Reflect.ownKeys(e).forEach((t) => {
              Dn(t, e[t]);
            });
          }
          function z(e, t) {
            v(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
          }
          if (
            (f && Fn(f, e, "c"),
            z(ln, p),
            z(cn, d),
            z(un, h),
            z(fn, g),
            z(Eo, m),
            z(Po, b),
            z(mn, O),
            z(vn, S),
            z(gn, C),
            z(pn, x),
            z(dn, _),
            z(hn, R),
            v(E))
          )
            if (E.length) {
              const t = e.exposed || (e.exposed = {});
              E.forEach((e) => {
                Object.defineProperty(t, e, {
                  get: () => n[e],
                  set: (t) => (n[e] = t),
                });
              });
            } else e.exposed || (e.exposed = {});
          k && e.render === l && (e.render = k),
            null != P && (e.inheritAttrs = P),
            F && (e.components = F),
            T && (e.directives = T);
        }
        function Fn(e, t, n) {
          St(v(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
        }
        function Tn(e, t, n, o) {
          const r = o.includes(".") ? Co(n, o) : () => n[o];
          if (x(e)) {
            const n = t[e];
            y(n) && wo(r, n);
          } else if (y(e)) wo(r, e.bind(n));
          else if (w(e))
            if (v(e)) e.forEach((e) => Tn(e, t, n, o));
            else {
              const o = y(e.handler) ? e.handler.bind(n) : t[e.handler];
              y(o) && wo(r, o, e);
            }
        }
        function zn(e) {
          const t = e.type,
            n = t.mixins,
            o = t.extends,
            r = e.appContext,
            i = r.mixins,
            s = r.optionsCache,
            a = r.config.optionMergeStrategies,
            l = s.get(t);
          let c;
          return (
            l
              ? (c = l)
              : i.length || n || o
              ? ((c = {}),
                i.length && i.forEach((e) => An(c, e, a, !0)),
                An(c, t, a))
              : (c = t),
            w(t) && s.set(t, c),
            c
          );
        }
        function An(e, t, n, o = !1) {
          const r = t.mixins,
            i = t.extends;
          i && An(e, i, n, !0), r && r.forEach((t) => An(e, t, n, !0));
          for (const s in t)
            if (o && "expose" === s);
            else {
              const o = In[s] || (n && n[s]);
              e[s] = o ? o(e[s], t[s]) : t[s];
            }
          return e;
        }
        const In = {
          data: Ln,
          props: Nn,
          emits: Nn,
          methods: Un,
          computed: Un,
          beforeCreate: Mn,
          created: Mn,
          beforeMount: Mn,
          mounted: Mn,
          beforeUpdate: Mn,
          updated: Mn,
          beforeDestroy: Mn,
          beforeUnmount: Mn,
          destroyed: Mn,
          unmounted: Mn,
          activated: Mn,
          deactivated: Mn,
          errorCaptured: Mn,
          serverPrefetch: Mn,
          components: Un,
          directives: Un,
          watch: function (e, t) {
            if (!e) return t;
            if (!t) return e;
            const n = p(Object.create(null), e);
            for (const o in t) n[o] = Mn(e[o], t[o]);
            return n;
          },
          provide: Ln,
          inject: function (e, t) {
            return Un(jn(e), jn(t));
          },
        };
        function Ln(e, t) {
          return t
            ? e
              ? function () {
                  return p(
                    y(e) ? e.call(this, this) : e,
                    y(t) ? t.call(this, this) : t
                  );
                }
              : t
            : e;
        }
        function jn(e) {
          if (v(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t;
          }
          return e;
        }
        function Mn(e, t) {
          return e ? [...new Set([].concat(e, t))] : t;
        }
        function Un(e, t) {
          return e ? p(Object.create(null), e, t) : t;
        }
        function Nn(e, t) {
          return e
            ? v(e) && v(t)
              ? [...new Set([...e, ...t])]
              : p(Object.create(null), Rn(e), Rn(null != t ? t : {}))
            : t;
        }
        function Vn() {
          return {
            app: null,
            config: {
              isNativeTag: c,
              performance: !1,
              globalProperties: {},
              optionMergeStrategies: {},
              errorHandler: void 0,
              warnHandler: void 0,
              compilerOptions: {},
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap(),
            propsCache: new WeakMap(),
            emitsCache: new WeakMap(),
          };
        }
        let $n = 0;
        function Bn(e, t) {
          return function (n, o = null) {
            y(n) || (n = p({}, n)), null == o || w(o) || (o = null);
            const r = Vn(),
              i = new WeakSet();
            let s = !1;
            const a = (r.app = {
              _uid: $n++,
              _component: n,
              _props: o,
              _container: null,
              _context: r,
              _instance: null,
              version: wr,
              get config() {
                return r.config;
              },
              set config(e) {},
              use: (e, ...t) => (
                i.has(e) ||
                  (e && y(e.install)
                    ? (i.add(e), e.install(a, ...t))
                    : y(e) && (i.add(e), e(a, ...t))),
                a
              ),
              mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), a),
              component: (e, t) =>
                t ? ((r.components[e] = t), a) : r.components[e],
              directive: (e, t) =>
                t ? ((r.directives[e] = t), a) : r.directives[e],
              mount(i, l, c) {
                if (!s) {
                  const u = Xo(n, o);
                  return (
                    (u.appContext = r),
                    !0 === c ? (c = "svg") : !1 === c && (c = void 0),
                    l && t ? t(u, i) : e(u, i, c),
                    (s = !0),
                    (a._container = i),
                    (i.__vue_app__ = a),
                    yr(u.component)
                  );
                }
              },
              unmount() {
                s && (e(null, a._container), delete a._container.__vue_app__);
              },
              provide: (e, t) => ((r.provides[e] = t), a),
              runWithContext(e) {
                const t = Wn;
                Wn = a;
                try {
                  return e();
                } finally {
                  Wn = t;
                }
              },
            });
            return a;
          };
        }
        let Wn = null;
        function Dn(e, t) {
          if (ar) {
            let n = ar.provides;
            const o = ar.parent && ar.parent.provides;
            o === n && (n = ar.provides = Object.create(o)), (n[e] = t);
          } else;
        }
        function Hn(e, t, n = !1) {
          const o = ar || qt;
          if (o || Wn) {
            const r = o
              ? null == o.parent
                ? o.vnode.appContext && o.vnode.appContext.provides
                : o.parent.provides
              : Wn._context.provides;
            if (r && e in r) return r[e];
            if (arguments.length > 1)
              return n && y(t) ? t.call(o && o.proxy) : t;
          }
        }
        const qn = {},
          Gn = () => Object.create(qn),
          Kn = (e) => Object.getPrototypeOf(e) === qn;
        function Yn(e, t, n, o = !1) {
          const r = {},
            i = Gn();
          (e.propsDefaults = Object.create(null)), Xn(e, t, r, i);
          for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
          n
            ? (e.props = o ? r : st(r, !1, Te, Ze, tt))
            : e.type.props
            ? (e.props = r)
            : (e.props = i),
            (e.attrs = i);
        }
        function Xn(e, n, o, r) {
          const i = t(e.propsOptions, 2),
            a = i[0],
            l = i[1];
          let c,
            u = !1;
          if (n)
            for (let t in n) {
              if (P(t)) continue;
              const i = n[t];
              let s;
              a && g(a, (s = z(t)))
                ? l && l.includes(s)
                  ? ((c || (c = {}))[s] = i)
                  : (o[s] = i)
                : Ht(e.emitsOptions, t) ||
                  (t in r && i === r[t]) ||
                  ((r[t] = i), (u = !0));
            }
          if (l) {
            const t = ft(o),
              n = c || s;
            for (let r = 0; r < l.length; r++) {
              const i = l[r];
              o[i] = Qn(a, t, i, n[i], e, !g(n, i));
            }
          }
          return u;
        }
        function Qn(e, t, n, o, r, i) {
          const s = e[n];
          if (null != s) {
            const e = g(s, "default");
            if (e && void 0 === o) {
              const e = s.default;
              if (s.type !== Function && !s.skipFactory && y(e)) {
                const i = r.propsDefaults;
                if (n in i) o = i[n];
                else {
                  const s = fr(r);
                  (o = i[n] = e.call(null, t)), s();
                }
              } else o = e;
            }
            s[0] &&
              (i && !e
                ? (o = !1)
                : !s[1] || ("" !== o && o !== I(n)) || (o = !0));
          }
          return o;
        }
        function Zn(e, n, o = !1) {
          const r = n.propsCache,
            i = r.get(e);
          if (i) return i;
          const l = e.props,
            c = {},
            u = [];
          let f = !1;
          if (!y(e)) {
            const r = (e) => {
              f = !0;
              const o = t(Zn(e, n, !0), 2),
                r = o[0],
                i = o[1];
              p(c, r), i && u.push(...i);
            };
            !o && n.mixins.length && n.mixins.forEach(r),
              e.extends && r(e.extends),
              e.mixins && e.mixins.forEach(r);
          }
          if (!l && !f) return w(e) && r.set(e, a), a;
          if (v(l))
            for (let t = 0; t < l.length; t++) {
              const e = z(l[t]);
              Jn(e) && (c[e] = s);
            }
          else if (l)
            for (const t in l) {
              const e = z(t);
              if (Jn(e)) {
                const n = l[t],
                  o = (c[e] = v(n) || y(n) ? { type: n } : p({}, n));
                if (o) {
                  const t = no(Boolean, o.type),
                    n = no(String, o.type);
                  (o[0] = t > -1),
                    (o[1] = n < 0 || t < n),
                    (t > -1 || g(o, "default")) && u.push(e);
                }
              }
            }
          const d = [c, u];
          return w(e) && r.set(e, d), d;
        }
        function Jn(e) {
          return "$" !== e[0] && !P(e);
        }
        function eo(e) {
          if (null === e) return "null";
          if ("function" == typeof e) return e.name || "";
          if ("object" == typeof e) {
            return (e.constructor && e.constructor.name) || "";
          }
          return "";
        }
        function to(e, t) {
          return eo(e) === eo(t);
        }
        function no(e, t) {
          return v(t)
            ? t.findIndex((t) => to(t, e))
            : y(t) && to(t, e)
            ? 0
            : -1;
        }
        const oo = (e) => "_" === e[0] || "$stable" === e,
          ro = (e) => (v(e) ? e.map(er) : [er(e)]),
          io = (e, t, n) => {
            if (t._n) return t;
            const o = Qt((...e) => ro(t(...e)), n);
            return (o._c = !1), o;
          },
          so = (e, t, n) => {
            const o = e._ctx;
            for (const r in e) {
              if (oo(r)) continue;
              const n = e[r];
              if (y(n)) t[r] = io(0, n, o);
              else if (null != n) {
                const e = ro(n);
                t[r] = () => e;
              }
            }
          },
          ao = (e, t) => {
            const n = ro(t);
            e.slots.default = () => n;
          },
          lo = (e, t) => {
            const n = (e.slots = Gn());
            if (32 & e.vnode.shapeFlag) {
              const e = t._;
              e ? (p(n, t), N(n, "_", e, !0)) : so(t, n);
            } else t && ao(e, t);
          },
          co = (e, t, n) => {
            const o = e.vnode,
              r = e.slots;
            let i = !0,
              a = s;
            if (32 & o.shapeFlag) {
              const e = t._;
              e
                ? n && 1 === e
                  ? (i = !1)
                  : (p(r, t), n || 1 !== e || delete r._)
                : ((i = !t.$stable), so(t, r)),
                (a = t);
            } else t && (ao(e, t), (a = { default: 1 }));
            if (i) for (const s in r) oo(s) || null != a[s] || delete r[s];
          };
        function uo(e, t, n, o, r = !1) {
          if (v(e))
            return void e.forEach((e, i) =>
              uo(e, t && (v(t) ? t[i] : t), n, o, r)
            );
          if (xn(o) && !r) return;
          const i = 4 & o.shapeFlag ? yr(o.component) : o.el,
            a = r ? null : i,
            l = e.i,
            c = e.r,
            u = t && t.r,
            f = l.refs === s ? (l.refs = {}) : l.refs,
            p = l.setupState;
          if (
            (null != u &&
              u !== c &&
              (x(u)
                ? ((f[u] = null), g(p, u) && (p[u] = null))
                : mt(u) && (u.value = null)),
            y(c))
          )
            kt(c, l, 12, [a, f]);
          else {
            const t = x(c),
              o = mt(c);
            if (t || o) {
              const s = () => {
                if (e.f) {
                  const n = t ? (g(p, c) ? p[c] : f[c]) : c.value;
                  r
                    ? v(n) && d(n, i)
                    : v(n)
                    ? n.includes(i) || n.push(i)
                    : t
                    ? ((f[c] = [i]), g(p, c) && (p[c] = f[c]))
                    : ((c.value = [i]), e.k && (f[e.k] = c.value));
                } else
                  t
                    ? ((f[c] = a), g(p, c) && (p[c] = a))
                    : o && ((c.value = a), e.k && (f[e.k] = a));
              };
              a ? ((s.id = -1), fo(s, n)) : s();
            }
          }
        }
        const fo = function (e, t) {
          var n;
          t && t.pendingBranch
            ? v(e)
              ? t.effects.push(...e)
              : t.effects.push(e)
            : (v((n = e))
                ? Ft.push(...n)
                : (Tt && Tt.includes(n, n.allowRecurse ? zt + 1 : zt)) ||
                  Ft.push(n),
              Mt());
        };
        function po(e) {
          return (function (e, n) {
            B().__VUE__ = !0;
            const o = e.insert,
              r = e.remove,
              i = e.patchProp,
              c = e.createElement,
              u = e.createText,
              f = e.createComment,
              p = e.setText,
              d = e.setElementText,
              h = e.parentNode,
              v = e.nextSibling,
              m = e.setScopeId,
              b = void 0 === m ? l : m,
              y = e.insertStaticContent,
              x = (
                e,
                t,
                n,
                o = null,
                r = null,
                i = null,
                s = void 0,
                a = null,
                l = !!t.dynamicChildren
              ) => {
                if (e === t) return;
                e && !qo(e, t) && ((o = ne(e)), Y(e, r, i, !0), (e = null)),
                  -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null));
                const c = t.type,
                  u = t.ref,
                  f = t.shapeFlag;
                switch (c) {
                  case Io:
                    _(e, t, n, o);
                    break;
                  case Lo:
                    w(e, t, n, o);
                    break;
                  case jo:
                    null == e && S(t, n, o, s);
                    break;
                  case Ao:
                    M(e, t, n, o, r, i, s, a, l);
                    break;
                  default:
                    1 & f
                      ? R(e, t, n, o, r, i, s, a, l)
                      : 6 & f
                      ? N(e, t, n, o, r, i, s, a, l)
                      : (64 & f || 128 & f) &&
                        c.process(e, t, n, o, r, i, s, a, l, ie);
                }
                null != u && r && uo(u, e && e.ref, i, t || e, !t);
              },
              _ = (e, t, n, r) => {
                if (null == e) o((t.el = u(t.children)), n, r);
                else {
                  const n = (t.el = e.el);
                  t.children !== e.children && p(n, t.children);
                }
              },
              w = (e, t, n, r) => {
                null == e
                  ? o((t.el = f(t.children || "")), n, r)
                  : (t.el = e.el);
              },
              S = (e, n, o, r) => {
                var i = t(y(e.children, n, o, r, e.el, e.anchor), 2);
                (e.el = i[0]), (e.anchor = i[1]);
              },
              C = ({ el: e, anchor: t }, n, r) => {
                let i;
                for (; e && e !== t; ) (i = v(e)), o(e, n, r), (e = i);
                o(t, n, r);
              },
              O = ({ el: e, anchor: t }) => {
                let n;
                for (; e && e !== t; ) (n = v(e)), r(e), (e = n);
                r(t);
              },
              R = (e, t, n, o, r, i, s, a, l) => {
                "svg" === t.type
                  ? (s = "svg")
                  : "math" === t.type && (s = "mathml"),
                  null == e
                    ? E(t, n, o, r, i, s, a, l)
                    : A(e, t, r, i, s, a, l);
              },
              E = (e, t, n, r, s, a, l, u) => {
                let f, p;
                const h = e.props,
                  g = e.shapeFlag,
                  v = e.transition,
                  m = e.dirs;
                if (
                  ((f = e.el = c(e.type, a, h && h.is, h)),
                  8 & g
                    ? d(f, e.children)
                    : 16 & g && T(e.children, f, null, r, s, ho(e, a), l, u),
                  m && bn(e, null, r, "created"),
                  F(f, e, e.scopeId, l, r),
                  h)
                ) {
                  for (const t in h)
                    "value" === t ||
                      P(t) ||
                      i(f, t, null, h[t], a, e.children, r, s, ee);
                  "value" in h && i(f, "value", null, h.value, a),
                    (p = h.onVnodeBeforeMount) && rr(p, r, e);
                }
                m && bn(e, null, r, "beforeMount");
                const b = (function (e, t) {
                  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
                })(s, v);
                b && v.beforeEnter(f),
                  o(f, t, n),
                  ((p = h && h.onVnodeMounted) || b || m) &&
                    fo(() => {
                      p && rr(p, r, e),
                        b && v.enter(f),
                        m && bn(e, null, r, "mounted");
                    }, s);
              },
              F = (e, t, n, o, r) => {
                if ((n && b(e, n), o))
                  for (let i = 0; i < o.length; i++) b(e, o[i]);
                if (r) {
                  if (t === r.subTree) {
                    const t = r.vnode;
                    F(e, t, t.scopeId, t.slotScopeIds, r.parent);
                  }
                }
              },
              T = (e, t, n, o, r, i, s, a, l = 0) => {
                for (let c = l; c < e.length; c++) {
                  const l = (e[c] = a ? tr(e[c]) : er(e[c]));
                  x(null, l, t, n, o, r, i, s, a);
                }
              },
              A = (e, t, n, o, r, a, l) => {
                const c = (t.el = e.el);
                let u = t.patchFlag,
                  f = t.dynamicChildren,
                  p = t.dirs;
                u |= 16 & e.patchFlag;
                const h = e.props || s,
                  g = t.props || s;
                let v;
                if (
                  (n && go(n, !1),
                  (v = g.onVnodeBeforeUpdate) && rr(v, n, t, e),
                  p && bn(t, e, n, "beforeUpdate"),
                  n && go(n, !0),
                  f
                    ? L(e.dynamicChildren, f, c, n, o, ho(t, r), a)
                    : l || H(e, t, c, null, n, o, ho(t, r), a, !1),
                  u > 0)
                ) {
                  if (16 & u) j(c, t, h, g, n, o, r);
                  else if (
                    (2 & u &&
                      h.class !== g.class &&
                      i(c, "class", null, g.class, r),
                    4 & u && i(c, "style", h.style, g.style, r),
                    8 & u)
                  ) {
                    const s = t.dynamicProps;
                    for (let t = 0; t < s.length; t++) {
                      const a = s[t],
                        l = h[a],
                        u = g[a];
                      (u === l && "value" !== a) ||
                        i(c, a, l, u, r, e.children, n, o, ee);
                    }
                  }
                  1 & u && e.children !== t.children && d(c, t.children);
                } else l || null != f || j(c, t, h, g, n, o, r);
                ((v = g.onVnodeUpdated) || p) &&
                  fo(() => {
                    v && rr(v, n, t, e), p && bn(t, e, n, "updated");
                  }, o);
              },
              L = (e, t, n, o, r, i, s) => {
                for (let a = 0; a < t.length; a++) {
                  const l = e[a],
                    c = t[a],
                    u =
                      l.el && (l.type === Ao || !qo(l, c) || 70 & l.shapeFlag)
                        ? h(l.el)
                        : n;
                  x(l, c, u, null, o, r, i, s, !0);
                }
              },
              j = (e, t, n, o, r, a, l) => {
                if (n !== o) {
                  if (n !== s)
                    for (const s in n)
                      P(s) ||
                        s in o ||
                        i(e, s, n[s], null, l, t.children, r, a, ee);
                  for (const s in o) {
                    if (P(s)) continue;
                    const c = o[s],
                      u = n[s];
                    c !== u &&
                      "value" !== s &&
                      i(e, s, u, c, l, t.children, r, a, ee);
                  }
                  "value" in o && i(e, "value", n.value, o.value, l);
                }
              },
              M = (e, t, n, r, i, s, a, l, c) => {
                const f = (t.el = e ? e.el : u("")),
                  p = (t.anchor = e ? e.anchor : u(""));
                let d = t.patchFlag,
                  h = t.dynamicChildren,
                  g = t.slotScopeIds;
                g && (l = l ? l.concat(g) : g),
                  null == e
                    ? (o(f, n, r),
                      o(p, n, r),
                      T(t.children || [], n, p, i, s, a, l, c))
                    : d > 0 && 64 & d && h && e.dynamicChildren
                    ? (L(e.dynamicChildren, h, n, i, s, a, l),
                      (null != t.key || (i && t === i.subTree)) && vo(e, t, !0))
                    : H(e, t, n, p, i, s, a, l, c);
              },
              N = (e, t, n, o, r, i, s, a, l) => {
                (t.slotScopeIds = a),
                  null == e
                    ? 512 & t.shapeFlag
                      ? r.ctx.activate(t, n, o, s, l)
                      : V(t, n, o, r, i, s, l)
                    : $(e, t, l);
              },
              V = (e, t, n, o, r, i, a) => {
                const l = (e.component = (function (e, t, n) {
                  const o = e.type,
                    r = (t ? t.appContext : e.appContext) || ir,
                    i = {
                      uid: sr++,
                      vnode: e,
                      type: o,
                      parent: t,
                      appContext: r,
                      root: null,
                      next: null,
                      subTree: null,
                      effect: null,
                      update: null,
                      scope: new J(!0),
                      render: null,
                      proxy: null,
                      exposed: null,
                      exposeProxy: null,
                      withProxy: null,
                      provides: t ? t.provides : Object.create(r.provides),
                      accessCache: null,
                      renderCache: [],
                      components: null,
                      directives: null,
                      propsOptions: Zn(o, r),
                      emitsOptions: Dt(o, r),
                      emit: null,
                      emitted: null,
                      propsDefaults: s,
                      inheritAttrs: o.inheritAttrs,
                      ctx: s,
                      data: s,
                      props: s,
                      attrs: s,
                      slots: s,
                      refs: s,
                      setupState: s,
                      setupContext: null,
                      attrsProxy: null,
                      slotsProxy: null,
                      suspense: n,
                      suspenseId: n ? n.pendingId : 0,
                      asyncDep: null,
                      asyncResolved: !1,
                      isMounted: !1,
                      isUnmounted: !1,
                      isDeactivated: !1,
                      bc: null,
                      c: null,
                      bm: null,
                      m: null,
                      bu: null,
                      u: null,
                      um: null,
                      bum: null,
                      da: null,
                      a: null,
                      rtg: null,
                      rtc: null,
                      ec: null,
                      sp: null,
                    };
                  (i.ctx = { _: i }),
                    (i.root = t ? t.root : i),
                    (i.emit = Wt.bind(null, i)),
                    e.ce && e.ce(i);
                  return i;
                })(e, o, r));
                if (
                  (Ro(e) && (l.ctx.renderer = ie),
                  (function (e, t = !1) {
                    t && ur(t);
                    const n = e.vnode,
                      o = n.props,
                      r = n.children,
                      i = dr(e);
                    Yn(e, o, i, t), lo(e, r);
                    const s = i
                      ? (function (e, t) {
                          const n = e.type;
                          (e.accessCache = Object.create(null)),
                            (e.proxy = new Proxy(e.ctx, On));
                          const o = n.setup;
                          if (o) {
                            const n = (e.setupContext =
                                o.length > 1
                                  ? (function (e) {
                                      const t = (t) => {
                                        e.exposed = t || {};
                                      };
                                      return {
                                        attrs: new Proxy(e.attrs, br),
                                        slots: e.slots,
                                        emit: e.emit,
                                        expose: t,
                                      };
                                    })(e)
                                  : null),
                              r = fr(e);
                            le();
                            const i = kt(o, e, 0, [e.props, n]);
                            if ((ce(), r(), k(i))) {
                              if ((i.then(pr, pr), t))
                                return i
                                  .then((n) => {
                                    vr(e, n, t);
                                  })
                                  .catch((t) => {
                                    Ct(t, e, 0);
                                  });
                              e.asyncDep = i;
                            } else vr(e, i, t);
                          } else mr(e, t);
                        })(e, t)
                      : void 0;
                    t && ur(!1);
                  })(l),
                  l.asyncDep)
                ) {
                  if ((r && r.registerDep(l, W, a), !e.el)) {
                    const e = (l.subTree = Xo(Lo));
                    w(null, e, t, n);
                  }
                } else W(l, e, t, n, r, i, a);
              },
              $ = (e, t, n) => {
                const o = (t.component = e.component);
                if (
                  (function (e, t, n) {
                    const o = e.props,
                      r = e.children,
                      i = e.component,
                      s = t.props,
                      a = t.children,
                      l = t.patchFlag,
                      c = i.emitsOptions;
                    if (t.dirs || t.transition) return !0;
                    if (!(n && l >= 0))
                      return (
                        !((!r && !a) || (a && a.$stable)) ||
                        (o !== s && (o ? !s || tn(o, s, c) : !!s))
                      );
                    if (1024 & l) return !0;
                    if (16 & l) return o ? tn(o, s, c) : !!s;
                    if (8 & l) {
                      const e = t.dynamicProps;
                      for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (s[n] !== o[n] && !Ht(c, n)) return !0;
                      }
                    }
                    return !1;
                  })(e, t, n)
                ) {
                  if (o.asyncDep && !o.asyncResolved) return void D(o, t, n);
                  (o.next = t),
                    (function (e) {
                      const t = Et.indexOf(e);
                      t > Pt && Et.splice(t, 1);
                    })(o.update),
                    (o.effect.dirty = !0),
                    o.update();
                } else (t.el = e.el), (o.vnode = t);
              },
              W = (e, t, n, o, r, i, s) => {
                const a = () => {
                    if (e.isMounted) {
                      let t = e.next,
                        n = e.bu,
                        o = e.u,
                        l = e.parent,
                        c = e.vnode;
                      {
                        const n = mo(e);
                        if (n)
                          return (
                            t && ((t.el = c.el), D(e, t, s)),
                            void n.asyncDep.then(() => {
                              e.isUnmounted || a();
                            })
                          );
                      }
                      let u,
                        f = t;
                      go(e, !1),
                        t ? ((t.el = c.el), D(e, t, s)) : (t = c),
                        n && U(n),
                        (u = t.props && t.props.onVnodeBeforeUpdate) &&
                          rr(u, l, t, c),
                        go(e, !0);
                      const p = Zt(e),
                        d = e.subTree;
                      (e.subTree = p),
                        x(d, p, h(d.el), ne(d), e, r, i),
                        (t.el = p.el),
                        null === f &&
                          (function ({ vnode: e, parent: t }, n) {
                            for (; t; ) {
                              const o = t.subTree;
                              if (
                                (o.suspense &&
                                  o.suspense.activeBranch === e &&
                                  (o.el = e.el),
                                o !== e)
                              )
                                break;
                              ((e = t.vnode).el = n), (t = t.parent);
                            }
                          })(e, p.el),
                        o && fo(o, r),
                        (u = t.props && t.props.onVnodeUpdated) &&
                          fo(() => rr(u, l, t, c), r);
                    } else {
                      let s;
                      const a = t,
                        l = a.el,
                        c = a.props,
                        u = e.bm,
                        f = e.m,
                        p = e.parent,
                        d = xn(t);
                      if (
                        (go(e, !1),
                        u && U(u),
                        !d && (s = c && c.onVnodeBeforeMount) && rr(s, p, t),
                        go(e, !0),
                        l && ae)
                      ) {
                        const n = () => {
                          (e.subTree = Zt(e)), ae(l, e.subTree, e, r, null);
                        };
                        d
                          ? t.type
                              .__asyncLoader()
                              .then(() => !e.isUnmounted && n())
                          : n();
                      } else {
                        const s = (e.subTree = Zt(e));
                        x(null, s, n, o, e, r, i), (t.el = s.el);
                      }
                      if ((f && fo(f, r), !d && (s = c && c.onVnodeMounted))) {
                        const e = t;
                        fo(() => rr(s, p, e), r);
                      }
                      (256 & t.shapeFlag ||
                        (p && xn(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                        e.a &&
                        fo(e.a, r),
                        (e.isMounted = !0),
                        (t = n = o = null);
                    }
                  },
                  c = (e.effect = new te(a, l, () => jt(u), e.scope)),
                  u = (e.update = () => {
                    c.dirty && c.run();
                  });
                (u.id = e.uid), go(e, !0), u();
              },
              D = (e, n, o) => {
                n.component = e;
                const r = e.vnode.props;
                (e.vnode = n),
                  (e.next = null),
                  (function (e, n, o, r) {
                    const i = e.props,
                      s = e.attrs,
                      a = e.vnode.patchFlag,
                      l = ft(i),
                      c = t(e.propsOptions, 1)[0];
                    let u = !1;
                    if (!(r || a > 0) || 16 & a) {
                      let t;
                      Xn(e, n, i, s) && (u = !0);
                      for (const r in l)
                        (n && (g(n, r) || ((t = I(r)) !== r && g(n, t)))) ||
                          (c
                            ? !o ||
                              (void 0 === o[r] && void 0 === o[t]) ||
                              (i[r] = Qn(c, l, r, void 0, e, !0))
                            : delete i[r]);
                      if (s !== l)
                        for (const e in s)
                          (n && g(n, e)) || (delete s[e], (u = !0));
                    } else if (8 & a) {
                      const t = e.vnode.dynamicProps;
                      for (let o = 0; o < t.length; o++) {
                        let r = t[o];
                        if (Ht(e.emitsOptions, r)) continue;
                        const a = n[r];
                        if (c)
                          if (g(s, r)) a !== s[r] && ((s[r] = a), (u = !0));
                          else {
                            const t = z(r);
                            i[t] = Qn(c, l, t, a, e, !1);
                          }
                        else a !== s[r] && ((s[r] = a), (u = !0));
                      }
                    }
                    u && xe(e.attrs, "set", "");
                  })(e, n.props, r, o),
                  co(e, n.children, o),
                  le(),
                  Ut(e),
                  ce();
              },
              H = (e, t, n, o, r, i, s, a, l = !1) => {
                const c = e && e.children,
                  u = e ? e.shapeFlag : 0,
                  f = t.children,
                  p = t.patchFlag,
                  h = t.shapeFlag;
                if (p > 0) {
                  if (128 & p) return void G(c, f, n, o, r, i, s, a, l);
                  if (256 & p) return void q(c, f, n, o, r, i, s, a, l);
                }
                8 & h
                  ? (16 & u && ee(c, r, i), f !== c && d(n, f))
                  : 16 & u
                  ? 16 & h
                    ? G(c, f, n, o, r, i, s, a, l)
                    : ee(c, r, i, !0)
                  : (8 & u && d(n, ""), 16 & h && T(f, n, o, r, i, s, a, l));
              },
              q = (e, t, n, o, r, i, s, l, c) => {
                t = t || a;
                const u = (e = e || a).length,
                  f = t.length,
                  p = Math.min(u, f);
                let d;
                for (d = 0; d < p; d++) {
                  const o = (t[d] = c ? tr(t[d]) : er(t[d]));
                  x(e[d], o, n, null, r, i, s, l, c);
                }
                u > f ? ee(e, r, i, !0, !1, p) : T(t, n, o, r, i, s, l, c, p);
              },
              G = (e, t, n, o, r, i, s, l, c) => {
                let u = 0;
                const f = t.length;
                let p = e.length - 1,
                  d = f - 1;
                for (; u <= p && u <= d; ) {
                  const o = e[u],
                    a = (t[u] = c ? tr(t[u]) : er(t[u]));
                  if (!qo(o, a)) break;
                  x(o, a, n, null, r, i, s, l, c), u++;
                }
                for (; u <= p && u <= d; ) {
                  const o = e[p],
                    a = (t[d] = c ? tr(t[d]) : er(t[d]));
                  if (!qo(o, a)) break;
                  x(o, a, n, null, r, i, s, l, c), p--, d--;
                }
                if (u > p) {
                  if (u <= d) {
                    const e = d + 1,
                      a = e < f ? t[e].el : o;
                    for (; u <= d; )
                      x(
                        null,
                        (t[u] = c ? tr(t[u]) : er(t[u])),
                        n,
                        a,
                        r,
                        i,
                        s,
                        l,
                        c
                      ),
                        u++;
                  }
                } else if (u > d) for (; u <= p; ) Y(e[u], r, i, !0), u++;
                else {
                  const h = u,
                    g = u,
                    v = new Map();
                  for (u = g; u <= d; u++) {
                    const e = (t[u] = c ? tr(t[u]) : er(t[u]));
                    null != e.key && v.set(e.key, u);
                  }
                  let m,
                    b = 0;
                  const y = d - g + 1;
                  let _ = !1,
                    w = 0;
                  const k = new Array(y);
                  for (u = 0; u < y; u++) k[u] = 0;
                  for (u = h; u <= p; u++) {
                    const o = e[u];
                    if (b >= y) {
                      Y(o, r, i, !0);
                      continue;
                    }
                    let a;
                    if (null != o.key) a = v.get(o.key);
                    else
                      for (m = g; m <= d; m++)
                        if (0 === k[m - g] && qo(o, t[m])) {
                          a = m;
                          break;
                        }
                    void 0 === a
                      ? Y(o, r, i, !0)
                      : ((k[a - g] = u + 1),
                        a >= w ? (w = a) : (_ = !0),
                        x(o, t[a], n, null, r, i, s, l, c),
                        b++);
                  }
                  const S = _
                    ? (function (e) {
                        const t = e.slice(),
                          n = [0];
                        let o, r, i, s, a;
                        const l = e.length;
                        for (o = 0; o < l; o++) {
                          const l = e[o];
                          if (0 !== l) {
                            if (((r = n[n.length - 1]), e[r] < l)) {
                              (t[o] = r), n.push(o);
                              continue;
                            }
                            for (i = 0, s = n.length - 1; i < s; )
                              (a = (i + s) >> 1),
                                e[n[a]] < l ? (i = a + 1) : (s = a);
                            l < e[n[i]] &&
                              (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
                          }
                        }
                        (i = n.length), (s = n[i - 1]);
                        for (; i-- > 0; ) (n[i] = s), (s = t[s]);
                        return n;
                      })(k)
                    : a;
                  for (m = S.length - 1, u = y - 1; u >= 0; u--) {
                    const e = g + u,
                      a = t[e],
                      p = e + 1 < f ? t[e + 1].el : o;
                    0 === k[u]
                      ? x(null, a, n, p, r, i, s, l, c)
                      : _ && (m < 0 || u !== S[m] ? K(a, n, p, 2) : m--);
                  }
                }
              },
              K = (e, t, n, r, i = null) => {
                const s = e.el,
                  a = e.type,
                  l = e.transition,
                  c = e.children,
                  u = e.shapeFlag;
                if (6 & u) return void K(e.component.subTree, t, n, r);
                if (128 & u) return void e.suspense.move(t, n, r);
                if (64 & u) return void a.move(e, t, n, ie);
                if (a === Ao) {
                  o(s, t, n);
                  for (let e = 0; e < c.length; e++) K(c[e], t, n, r);
                  return void o(e.anchor, t, n);
                }
                if (a === jo) return void C(e, t, n);
                if (2 !== r && 1 & u && l)
                  if (0 === r)
                    l.beforeEnter(s), o(s, t, n), fo(() => l.enter(s), i);
                  else {
                    const e = l.leave,
                      r = l.delayLeave,
                      i = l.afterLeave,
                      a = () => o(s, t, n),
                      c = () => {
                        e(s, () => {
                          a(), i && i();
                        });
                      };
                    r ? r(s, a, c) : c();
                  }
                else o(s, t, n);
              },
              Y = (e, t, n, o = !1, r = !1) => {
                const i = e.type,
                  s = e.props,
                  a = e.ref,
                  l = e.children,
                  c = e.dynamicChildren,
                  u = e.shapeFlag,
                  f = e.patchFlag,
                  p = e.dirs,
                  d = e.memoIndex;
                if (
                  (-2 === f && (r = !1),
                  null != a && uo(a, null, n, e, !0),
                  null != d && (t.renderCache[d] = void 0),
                  256 & u)
                )
                  return void t.ctx.deactivate(e);
                const h = 1 & u && p,
                  g = !xn(e);
                let v;
                if (
                  (g && (v = s && s.onVnodeBeforeUnmount) && rr(v, t, e), 6 & u)
                )
                  Z(e.component, n, o);
                else {
                  if (128 & u) return void e.suspense.unmount(n, o);
                  h && bn(e, null, t, "beforeUnmount"),
                    64 & u
                      ? e.type.remove(e, t, n, ie, o)
                      : c && (i !== Ao || (f > 0 && 64 & f))
                      ? ee(c, t, n, !1, !0)
                      : ((i === Ao && 384 & f) || (!r && 16 & u)) &&
                        ee(l, t, n),
                    o && X(e);
                }
                ((g && (v = s && s.onVnodeUnmounted)) || h) &&
                  fo(() => {
                    v && rr(v, t, e), h && bn(e, null, t, "unmounted");
                  }, n);
              },
              X = (e) => {
                const t = e.type,
                  n = e.el,
                  o = e.anchor,
                  i = e.transition;
                if (t === Ao) return void Q(n, o);
                if (t === jo) return void O(e);
                const s = () => {
                  r(n), i && !i.persisted && i.afterLeave && i.afterLeave();
                };
                if (1 & e.shapeFlag && i && !i.persisted) {
                  const t = i.leave,
                    o = i.delayLeave,
                    r = () => t(n, s);
                  o ? o(e.el, s, r) : r();
                } else s();
              },
              Q = (e, t) => {
                let n;
                for (; e !== t; ) (n = v(e)), r(e), (e = n);
                r(t);
              },
              Z = (e, t, n) => {
                const o = e.bum,
                  r = e.scope,
                  i = e.update,
                  s = e.subTree,
                  a = e.um,
                  l = e.m,
                  c = e.a;
                bo(l),
                  bo(c),
                  o && U(o),
                  r.stop(),
                  i && ((i.active = !1), Y(s, e, t, n)),
                  a && fo(a, t),
                  fo(() => {
                    e.isUnmounted = !0;
                  }, t),
                  t &&
                    t.pendingBranch &&
                    !t.isUnmounted &&
                    e.asyncDep &&
                    !e.asyncResolved &&
                    e.suspenseId === t.pendingId &&
                    (t.deps--, 0 === t.deps && t.resolve());
              },
              ee = (e, t, n, o = !1, r = !1, i = 0) => {
                for (let s = i; s < e.length; s++) Y(e[s], t, n, o, r);
              },
              ne = (e) =>
                6 & e.shapeFlag
                  ? ne(e.component.subTree)
                  : 128 & e.shapeFlag
                  ? e.suspense.next()
                  : v(e.anchor || e.el);
            let oe = !1;
            const re = (e, t, n) => {
                null == e
                  ? t._vnode && Y(t._vnode, null, null, !0)
                  : x(t._vnode || null, e, t, null, null, null, n),
                  oe || ((oe = !0), Ut(), Nt(), (oe = !1)),
                  (t._vnode = e);
              },
              ie = {
                p: x,
                um: Y,
                m: K,
                r: X,
                mt: V,
                mc: T,
                pc: H,
                pbc: L,
                n: ne,
                o: e,
              };
            let se, ae;
            return { render: re, hydrate: se, createApp: Bn(re, se) };
          })(e);
        }
        function ho({ type: e, props: t }, n) {
          return ("svg" === n && "foreignObject" === e) ||
            ("mathml" === n &&
              "annotation-xml" === e &&
              t &&
              t.encoding &&
              t.encoding.includes("html"))
            ? void 0
            : n;
        }
        function go({ effect: e, update: t }, n) {
          e.allowRecurse = t.allowRecurse = n;
        }
        function vo(e, t, n = !1) {
          const o = e.children,
            r = t.children;
          if (v(o) && v(r))
            for (let i = 0; i < o.length; i++) {
              const e = o[i];
              let t = r[i];
              1 & t.shapeFlag &&
                !t.dynamicChildren &&
                ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
                  ((t = r[i] = tr(r[i])), (t.el = e.el)),
                n || -2 === t.patchFlag || vo(e, t)),
                t.type === Io && (t.el = e.el);
            }
        }
        function mo(e) {
          const t = e.subTree.component;
          if (t) return t.asyncDep && !t.asyncResolved ? t : mo(t);
        }
        function bo(e) {
          if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
        }
        const yo = Symbol.for("v-scx"),
          xo = () => Hn(yo);
        const _o = {};
        function wo(e, t, n) {
          return ko(e, t, n);
        }
        function ko(
          e,
          t,
          {
            immediate: n,
            deep: o,
            flush: r,
            once: i,
            onTrack: a,
            onTrigger: c,
          } = s
        ) {
          if (t && i) {
            const e = t;
            t = (...t) => {
              e(...t), O();
            };
          }
          const u = ar,
            f = (e) => (!0 === o ? e : Oo(e, !1 === o ? 1 : void 0));
          let p,
            h,
            g = !1,
            m = !1;
          if (
            (mt(e)
              ? ((p = () => e.value), (g = ct(e)))
              : at(e)
              ? ((p = () => f(e)), (g = !0))
              : v(e)
              ? ((m = !0),
                (g = e.some((e) => at(e) || ct(e))),
                (p = () =>
                  e.map((e) =>
                    mt(e) ? e.value : at(e) ? f(e) : y(e) ? kt(e, u, 2) : void 0
                  )))
              : (p = y(e)
                  ? t
                    ? () => kt(e, u, 2)
                    : () => (h && h(), St(e, u, 3, [x]))
                  : l),
            t && o)
          ) {
            const e = p;
            p = () => Oo(e());
          }
          let b,
            x = (e) => {
              h = S.onStop = () => {
                kt(e, u, 4), (h = S.onStop = void 0);
              };
            };
          if (gr) {
            if (
              ((x = l),
              t ? n && St(t, u, 3, [p(), m ? [] : void 0, x]) : p(),
              "sync" !== r)
            )
              return l;
            {
              const e = xo();
              b = e.__watcherHandles || (e.__watcherHandles = []);
            }
          }
          let _ = m ? new Array(e.length).fill(_o) : _o;
          const w = () => {
            if (S.active && S.dirty)
              if (t) {
                const e = S.run();
                (o || g || (m ? e.some((e, t) => M(e, _[t])) : M(e, _))) &&
                  (h && h(),
                  St(t, u, 3, [
                    e,
                    _ === _o ? void 0 : m && _[0] === _o ? [] : _,
                    x,
                  ]),
                  (_ = e));
              } else S.run();
          };
          let k;
          (w.allowRecurse = !!t),
            "sync" === r
              ? (k = w)
              : "post" === r
              ? (k = () => fo(w, u && u.suspense))
              : ((w.pre = !0), u && (w.id = u.uid), (k = () => jt(w)));
          const S = new te(p, l, k),
            C = ee(),
            O = () => {
              S.stop(), C && d(C.effects, S);
            };
          return (
            t
              ? n
                ? w()
                : (_ = S.run())
              : "post" === r
              ? fo(S.run.bind(S), u && u.suspense)
              : S.run(),
            b && b.push(O),
            O
          );
        }
        function So(e, t, n) {
          const o = this.proxy,
            r = x(e) ? (e.includes(".") ? Co(o, e) : () => o[e]) : e.bind(o, o);
          let i;
          y(t) ? (i = t) : ((i = t.handler), (n = t));
          const s = fr(this),
            a = ko(r, i.bind(o), n);
          return s(), a;
        }
        function Co(e, t) {
          const n = t.split(".");
          return () => {
            let t = e;
            for (let e = 0; e < n.length && t; e++) t = t[n[e]];
            return t;
          };
        }
        function Oo(e, t = 1 / 0, o) {
          if (t <= 0 || !w(e) || e.__v_skip) return e;
          if ((o = o || new Set()).has(e)) return e;
          if ((o.add(e), t--, mt(e))) Oo(e.value, t, o);
          else if (v(e)) for (let n = 0; n < e.length; n++) Oo(e[n], t, o);
          else if (b(e) || m(e))
            e.forEach((e) => {
              Oo(e, t, o);
            });
          else if (R(e)) {
            for (const n in e) Oo(e[n], t, o);
            var r,
              i = n(Object.getOwnPropertySymbols(e));
            try {
              for (i.s(); !(r = i.n()).done; ) {
                const n = r.value;
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                  Oo(e[n], t, o);
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
          }
          return e;
        }
        const Ro = (e) => e.type.__isKeepAlive;
        function Eo(e, t) {
          Fo(e, "a", t);
        }
        function Po(e, t) {
          Fo(e, "da", t);
        }
        function Fo(e, t, n = ar) {
          const o =
            e.__wdc ||
            (e.__wdc = () => {
              let t = n;
              for (; t; ) {
                if (t.isDeactivated) return;
                t = t.parent;
              }
              return e();
            });
          if ((sn(t, o, n), n)) {
            let e = n.parent;
            for (; e && e.parent; )
              Ro(e.parent.vnode) && To(o, t, n, e), (e = e.parent);
          }
        }
        function To(e, t, n, o) {
          const r = sn(t, e, o, !0);
          dn(() => {
            d(o[t], r);
          }, n);
        }
        function zo(e, t) {
          6 & e.shapeFlag && e.component
            ? zo(e.component.subTree, t)
            : 128 & e.shapeFlag
            ? ((e.ssContent.transition = t.clone(e.ssContent)),
              (e.ssFallback.transition = t.clone(e.ssFallback)))
            : (e.transition = t);
        }
        const Ao = Symbol.for("v-fgt"),
          Io = Symbol.for("v-txt"),
          Lo = Symbol.for("v-cmt"),
          jo = Symbol.for("v-stc"),
          Mo = [];
        let Uo = null;
        function No(e = !1) {
          Mo.push((Uo = e ? null : []));
        }
        let Vo = 1;
        function $o(e) {
          Vo += e;
        }
        function Bo(e) {
          return (
            (e.dynamicChildren = Vo > 0 ? Uo || a : null),
            Mo.pop(),
            (Uo = Mo[Mo.length - 1] || null),
            Vo > 0 && Uo && Uo.push(e),
            e
          );
        }
        function Wo(e, t, n, o, r, i) {
          return Bo(Yo(e, t, n, o, r, i, !0));
        }
        function Do(e, t, n, o, r) {
          return Bo(Xo(e, t, n, o, r, !0));
        }
        function Ho(e) {
          return !!e && !0 === e.__v_isVNode;
        }
        function qo(e, t) {
          return e.type === t.type && e.key === t.key;
        }
        const Go = ({ key: e }) => (null != e ? e : null),
          Ko = ({ ref: e, ref_key: t, ref_for: n }) => (
            "number" == typeof e && (e = "" + e),
            null != e
              ? x(e) || mt(e) || y(e)
                ? { i: qt, r: e, k: t, f: !!n }
                : e
              : null
          );
        function Yo(
          e,
          t = null,
          n = null,
          o = 0,
          r = null,
          i = e === Ao ? 0 : 1,
          s = !1,
          a = !1
        ) {
          const l = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && Go(t),
            ref: t && Ko(t),
            scopeId: Gt,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: i,
            patchFlag: o,
            dynamicProps: r,
            dynamicChildren: null,
            appContext: null,
            ctx: qt,
          };
          return (
            a
              ? (nr(l, n), 128 & i && e.normalize(l))
              : n && (l.shapeFlag |= x(n) ? 8 : 16),
            Vo > 0 &&
              !s &&
              Uo &&
              (l.patchFlag > 0 || 6 & i) &&
              32 !== l.patchFlag &&
              Uo.push(l),
            l
          );
        }
        const Xo = function (e, t = null, n = null, o = 0, r = null, i = !1) {
          (e && e !== on) || (e = Lo);
          if (Ho(e)) {
            const o = Qo(e, t, !0);
            return (
              n && nr(o, n),
              Vo > 0 &&
                !i &&
                Uo &&
                (6 & o.shapeFlag ? (Uo[Uo.indexOf(e)] = o) : Uo.push(o)),
              (o.patchFlag = -2),
              o
            );
          }
          (s = e), y(s) && "__vccOpts" in s && (e = e.__vccOpts);
          var s;
          if (t) {
            let e = (t = (function (e) {
                return e ? (ut(e) || Kn(e) ? p({}, e) : e) : null;
              })(t)),
              n = e.class,
              o = e.style;
            n && !x(n) && (t.class = K(n)),
              w(o) && (ut(o) && !v(o) && (o = p({}, o)), (t.style = W(o)));
          }
          const a = x(e)
            ? 1
            : ((e) => e.__isSuspense)(e)
            ? 128
            : ((e) => e.__isTeleport)(e)
            ? 64
            : w(e)
            ? 4
            : y(e)
            ? 2
            : 0;
          return Yo(e, t, n, o, r, a, i, !0);
        };
        function Qo(e, t, n = !1, o = !1) {
          const r = e.props,
            i = e.ref,
            s = e.patchFlag,
            a = e.children,
            l = e.transition,
            c = t ? or(r || {}, t) : r,
            u = {
              __v_isVNode: !0,
              __v_skip: !0,
              type: e.type,
              props: c,
              key: c && Go(c),
              ref:
                t && t.ref
                  ? n && i
                    ? v(i)
                      ? i.concat(Ko(t))
                      : [i, Ko(t)]
                    : Ko(t)
                  : i,
              scopeId: e.scopeId,
              slotScopeIds: e.slotScopeIds,
              children: a,
              target: e.target,
              targetAnchor: e.targetAnchor,
              staticCount: e.staticCount,
              shapeFlag: e.shapeFlag,
              patchFlag: t && e.type !== Ao ? (-1 === s ? 16 : 16 | s) : s,
              dynamicProps: e.dynamicProps,
              dynamicChildren: e.dynamicChildren,
              appContext: e.appContext,
              dirs: e.dirs,
              transition: l,
              component: e.component,
              suspense: e.suspense,
              ssContent: e.ssContent && Qo(e.ssContent),
              ssFallback: e.ssFallback && Qo(e.ssFallback),
              el: e.el,
              anchor: e.anchor,
              ctx: e.ctx,
              ce: e.ce,
            };
          return l && o && zo(u, l.clone(u)), u;
        }
        function Zo(e = " ", t = 0) {
          return Xo(Io, null, e, t);
        }
        function Jo(e = "", t = !1) {
          return t ? (No(), Do(Lo, null, e)) : Xo(Lo, null, e);
        }
        function er(e) {
          return null == e || "boolean" == typeof e
            ? Xo(Lo)
            : v(e)
            ? Xo(Ao, null, e.slice())
            : "object" == typeof e
            ? tr(e)
            : Xo(Io, null, String(e));
        }
        function tr(e) {
          return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Qo(e);
        }
        function nr(e, t) {
          let n = 0;
          const o = e.shapeFlag;
          if (null == t) t = null;
          else if (v(t)) n = 16;
          else if ("object" == typeof t) {
            if (65 & o) {
              const n = t.default;
              return void (
                n && (n._c && (n._d = !1), nr(e, n()), n._c && (n._d = !0))
              );
            }
            {
              n = 32;
              const o = t._;
              o || Kn(t)
                ? 3 === o &&
                  qt &&
                  (1 === qt.slots._
                    ? (t._ = 1)
                    : ((t._ = 2), (e.patchFlag |= 1024)))
                : (t._ctx = qt);
            }
          } else
            y(t)
              ? ((t = { default: t, _ctx: qt }), (n = 32))
              : ((t = String(t)), 64 & o ? ((n = 16), (t = [Zo(t)])) : (n = 8));
          (e.children = t), (e.shapeFlag |= n);
        }
        function or(...e) {
          const t = {};
          for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (const e in o)
              if ("class" === e)
                t.class !== o.class && (t.class = K([t.class, o.class]));
              else if ("style" === e) t.style = W([t.style, o.style]);
              else if (u(e)) {
                const n = t[e],
                  r = o[e];
                !r ||
                  n === r ||
                  (v(n) && n.includes(r)) ||
                  (t[e] = n ? [].concat(n, r) : r);
              } else "" !== e && (t[e] = o[e]);
          }
          return t;
        }
        function rr(e, t, n, o = null) {
          St(e, t, 7, [n, o]);
        }
        const ir = Vn();
        let sr = 0;
        let ar = null;
        const lr = () => ar || qt;
        let cr, ur;
        {
          const e = B(),
            t = (t, n) => {
              let o;
              return (
                (o = e[t]) || (o = e[t] = []),
                o.push(n),
                (e) => {
                  o.length > 1 ? o.forEach((t) => t(e)) : o[0](e);
                }
              );
            };
          (cr = t("__VUE_INSTANCE_SETTERS__", (e) => (ar = e))),
            (ur = t("__VUE_SSR_SETTERS__", (e) => (gr = e)));
        }
        const fr = (e) => {
            const t = ar;
            return (
              cr(e),
              e.scope.on(),
              () => {
                e.scope.off(), cr(t);
              }
            );
          },
          pr = () => {
            ar && ar.scope.off(), cr(null);
          };
        function dr(e) {
          return 4 & e.vnode.shapeFlag;
        }
        let hr,
          gr = !1;
        function vr(e, t, n) {
          y(t)
            ? e.type.__ssrInlineRender
              ? (e.ssrRender = t)
              : (e.render = t)
            : w(t) && (e.setupState = wt(t)),
            mr(e, n);
        }
        function mr(e, t, n) {
          const o = e.type;
          if (!e.render) {
            if (!t && hr && !o.render) {
              const t = o.template || zn(e).template;
              if (t) {
                const n = e.appContext.config,
                  r = n.isCustomElement,
                  i = n.compilerOptions,
                  s = o.delimiters,
                  a = o.compilerOptions,
                  l = p(p({ isCustomElement: r, delimiters: s }, i), a);
                o.render = hr(t, l);
              }
            }
            e.render = o.render || l;
          }
          {
            const t = fr(e);
            le();
            try {
              Pn(e);
            } finally {
              ce(), t();
            }
          }
        }
        const br = { get: (e, t) => (ye(e, 0, ""), e[t]) };
        function yr(e) {
          return e.exposed
            ? e.exposeProxy ||
                (e.exposeProxy = new Proxy(
                  wt(
                    ((t = e.exposed),
                    Object.isExtensible(t) && N(t, "__v_skip", !0),
                    t)
                  ),
                  {
                    get: (t, n) =>
                      n in t ? t[n] : n in Sn ? Sn[n](e) : void 0,
                    has: (e, t) => t in e || t in Sn,
                  }
                ))
            : e.proxy;
          var t;
        }
        function xr(e, t = !0) {
          return y(e) ? e.displayName || e.name : e.name || (t && e.__name);
        }
        const _r = (e, t) => {
            const n = (function (e, t, n = !1) {
              let o, r;
              const i = y(e);
              return (
                i ? ((o = e), (r = l)) : ((o = e.get), (r = e.set)),
                new ht(o, r, i || !r, n)
              );
            })(e, 0, gr);
            return n;
          },
          wr = "3.4.31",
          kr = "undefined" != typeof document ? document : null,
          Sr = kr && kr.createElement("template"),
          Cr = {
            insert: (e, t, n) => {
              t.insertBefore(e, n || null);
            },
            remove: (e) => {
              const t = e.parentNode;
              t && t.removeChild(e);
            },
            createElement: (e, t, n, o) => {
              const r =
                "svg" === t
                  ? kr.createElementNS("http://www.w3.org/2000/svg", e)
                  : "mathml" === t
                  ? kr.createElementNS("http://www.w3.org/1998/Math/MathML", e)
                  : n
                  ? kr.createElement(e, { is: n })
                  : kr.createElement(e);
              return (
                "select" === e &&
                  o &&
                  null != o.multiple &&
                  r.setAttribute("multiple", o.multiple),
                r
              );
            },
            createText: (e) => kr.createTextNode(e),
            createComment: (e) => kr.createComment(e),
            setText: (e, t) => {
              e.nodeValue = t;
            },
            setElementText: (e, t) => {
              e.textContent = t;
            },
            parentNode: (e) => e.parentNode,
            nextSibling: (e) => e.nextSibling,
            querySelector: (e) => kr.querySelector(e),
            setScopeId(e, t) {
              e.setAttribute(t, "");
            },
            insertStaticContent(e, t, n, o, r, i) {
              const s = n ? n.previousSibling : t.lastChild;
              if (r && (r === i || r.nextSibling))
                for (
                  ;
                  t.insertBefore(r.cloneNode(!0), n),
                    r !== i && (r = r.nextSibling);

                );
              else {
                Sr.innerHTML =
                  "svg" === o
                    ? `<svg>${e}</svg>`
                    : "mathml" === o
                    ? `<math>${e}</math>`
                    : e;
                const r = Sr.content;
                if ("svg" === o || "mathml" === o) {
                  const e = r.firstChild;
                  for (; e.firstChild; ) r.appendChild(e.firstChild);
                  r.removeChild(e);
                }
                t.insertBefore(r, n);
              }
              return [
                s ? s.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild,
              ];
            },
          },
          Or = Symbol("_vtc");
        const Rr = Symbol("_vod"),
          Er = Symbol("_vsh"),
          Pr = Symbol(""),
          Fr = /(^|;)\s*display\s*:/;
        const Tr = /\s*!important$/;
        function zr(e, t, n) {
          if (v(n)) n.forEach((n) => zr(e, t, n));
          else if ((null == n && (n = ""), t.startsWith("--")))
            e.setProperty(t, n);
          else {
            const o = (function (e, t) {
              const n = Ir[t];
              if (n) return n;
              let o = z(t);
              if ("filter" !== o && o in e) return (Ir[t] = o);
              o = L(o);
              for (let r = 0; r < Ar.length; r++) {
                const n = Ar[r] + o;
                if (n in e) return (Ir[t] = n);
              }
              return t;
            })(e, t);
            Tr.test(n)
              ? e.setProperty(I(o), n.replace(Tr, ""), "important")
              : (e[o] = n);
          }
        }
        const Ar = ["Webkit", "Moz", "ms"],
          Ir = {};
        const Lr = "http://www.w3.org/1999/xlink";
        function jr(e, t, n, o, r, i = Y(t)) {
          o && t.startsWith("xlink:")
            ? null == n
              ? e.removeAttributeNS(Lr, t.slice(6, t.length))
              : e.setAttributeNS(Lr, t, n)
            : null == n || (i && !X(n))
            ? e.removeAttribute(t)
            : e.setAttribute(t, i ? "" : _(n) ? String(n) : n);
        }
        const Mr = Symbol("_vei");
        function Ur(e, n, o, r, i = null) {
          const s = e[Mr] || (e[Mr] = {}),
            a = s[n];
          if (r && a) a.value = r;
          else {
            const o = (function (e) {
                let t;
                if (Nr.test(e)) {
                  let n;
                  for (t = {}; (n = e.match(Nr)); )
                    (e = e.slice(0, e.length - n[0].length)),
                      (t[n[0].toLowerCase()] = !0);
                }
                const n = ":" === e[2] ? e.slice(3) : I(e.slice(2));
                return [n, t];
              })(n),
              l = t(o, 2),
              c = l[0],
              u = l[1];
            if (r) {
              const t = (s[n] = (function (e, t) {
                const n = (e) => {
                  if (e._vts) {
                    if (e._vts <= n.attached) return;
                  } else e._vts = Date.now();
                  St(
                    (function (e, t) {
                      if (v(t)) {
                        const n = e.stopImmediatePropagation;
                        return (
                          (e.stopImmediatePropagation = () => {
                            n.call(e), (e._stopped = !0);
                          }),
                          t.map((e) => (t) => !t._stopped && e && e(t))
                        );
                      }
                      return t;
                    })(e, n.value),
                    t,
                    5,
                    [e]
                  );
                };
                return (n.value = e), (n.attached = Br()), n;
              })(r, i));
              !(function (e, t, n, o) {
                e.addEventListener(t, n, o);
              })(e, c, t, u);
            } else
              a &&
                (!(function (e, t, n, o) {
                  e.removeEventListener(t, n, o);
                })(e, c, a, u),
                (s[n] = void 0));
          }
        }
        const Nr = /(?:Once|Passive|Capture)$/;
        let Vr = 0;
        const $r = Promise.resolve(),
          Br = () => Vr || ($r.then(() => (Vr = 0)), (Vr = Date.now()));
        const Wr = (e) =>
          111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) > 96 &&
          e.charCodeAt(2) < 123;
        const Dr = p(
          {
            patchProp: (e, t, o, r, i, s, a, l, c) => {
              const p = "svg" === i;
              "class" === t
                ? (function (e, t, n) {
                    const o = e[Or];
                    o && (t = (t ? [t, ...o] : [...o]).join(" ")),
                      null == t
                        ? e.removeAttribute("class")
                        : n
                        ? e.setAttribute("class", t)
                        : (e.className = t);
                  })(e, r, p)
                : "style" === t
                ? (function (e, t, o) {
                    const r = e.style,
                      i = x(o);
                    let s = !1;
                    if (o && !i) {
                      if (t)
                        if (x(t)) {
                          var a,
                            l = n(t.split(";"));
                          try {
                            for (l.s(); !(a = l.n()).done; ) {
                              const e = a.value,
                                t = e.slice(0, e.indexOf(":")).trim();
                              null == o[t] && zr(r, t, "");
                            }
                          } catch (c) {
                            l.e(c);
                          } finally {
                            l.f();
                          }
                        } else for (const e in t) null == o[e] && zr(r, e, "");
                      for (const e in o)
                        "display" === e && (s = !0), zr(r, e, o[e]);
                    } else if (i) {
                      if (t !== o) {
                        const e = r[Pr];
                        e && (o += ";" + e), (r.cssText = o), (s = Fr.test(o));
                      }
                    } else t && e.removeAttribute("style");
                    Rr in e &&
                      ((e[Rr] = s ? r.display : ""),
                      e[Er] && (r.display = "none"));
                  })(e, o, r)
                : u(t)
                ? f(t) || Ur(e, t, 0, r, a)
                : (
                    "." === t[0]
                      ? ((t = t.slice(1)), 1)
                      : "^" === t[0]
                      ? ((t = t.slice(1)), 0)
                      : (function (e, t, n, o) {
                          if (o)
                            return (
                              "innerHTML" === t ||
                              "textContent" === t ||
                              !!(t in e && Wr(t) && y(n))
                            );
                          if (
                            "spellcheck" === t ||
                            "draggable" === t ||
                            "translate" === t
                          )
                            return !1;
                          if ("form" === t) return !1;
                          if ("list" === t && "INPUT" === e.tagName) return !1;
                          if ("type" === t && "TEXTAREA" === e.tagName)
                            return !1;
                          if ("width" === t || "height" === t) {
                            const t = e.tagName;
                            if (
                              "IMG" === t ||
                              "VIDEO" === t ||
                              "CANVAS" === t ||
                              "SOURCE" === t
                            )
                              return !1;
                          }
                          if (Wr(t) && x(n)) return !1;
                          return t in e;
                        })(e, t, r, p)
                  )
                ? (!(function (e, t, n, o, r, i, s) {
                    if ("innerHTML" === t || "textContent" === t)
                      return o && s(o, r, i), void (e[t] = null == n ? "" : n);
                    const a = e.tagName;
                    if ("value" === t && "PROGRESS" !== a && !a.includes("-")) {
                      const o =
                          "OPTION" === a
                            ? e.getAttribute("value") || ""
                            : e.value,
                        r = null == n ? "" : String(n);
                      return (
                        (o === r && "_value" in e) || (e.value = r),
                        null == n && e.removeAttribute(t),
                        void (e._value = n)
                      );
                    }
                    let l = !1;
                    if ("" === n || null == n) {
                      const o = typeof e[t];
                      "boolean" === o
                        ? (n = X(n))
                        : null == n && "string" === o
                        ? ((n = ""), (l = !0))
                        : "number" === o && ((n = 0), (l = !0));
                    }
                    try {
                      e[t] = n;
                    } catch (c) {}
                    l && e.removeAttribute(t);
                  })(e, t, r, s, a, l, c),
                  e.tagName.includes("-") ||
                    ("value" !== t && "checked" !== t && "selected" !== t) ||
                    jr(e, t, r, p, 0, "value" !== t))
                : ("true-value" === t
                    ? (e._trueValue = r)
                    : "false-value" === t && (e._falseValue = r),
                  jr(e, t, r, p));
            },
          },
          Cr
        );
        let Hr;
        function qr(e) {
          return (
            !!ee() &&
            ((function (e) {
              Q && Q.cleanups.push(e);
            })(e),
            !0)
          );
        }
        function Gr(e) {
          return "function" == typeof e ? e() : xt(e);
        }
        const Kr =
          "undefined" != typeof window && "undefined" != typeof document;
        function Yr(e) {
          var t;
          const n = Gr(e);
          return null != (t = null == n ? void 0 : n.$el) ? t : n;
        }
        "undefined" != typeof WorkerGlobalScope &&
          (globalThis, WorkerGlobalScope);
        const Xr = Kr ? window : void 0;
        function Qr(e) {
          const t = (function () {
            const e = bt(!1),
              t = lr();
            return (
              t &&
                cn(() => {
                  e.value = !0;
                }, t),
              e
            );
          })();
          return _r(() => (t.value, Boolean(e())));
        }
        function Zr(e, t = {}) {
          const n = t.window,
            o = void 0 === n ? Xr : n,
            r = Qr(
              () => o && "matchMedia" in o && "function" == typeof o.matchMedia
            );
          let i;
          const s = bt(!1),
            a = (e) => {
              s.value = e.matches;
            },
            l = () => {
              i &&
                ("removeEventListener" in i
                  ? i.removeEventListener("change", a)
                  : i.removeListener(a));
            },
            c = (function (e, t) {
              return ko(e, null, t);
            })(() => {
              r.value &&
                (l(),
                (i = o.matchMedia(Gr(e))),
                "addEventListener" in i
                  ? i.addEventListener("change", a)
                  : i.addListener(a),
                (s.value = i.matches));
            });
          return (
            qr(() => {
              c(), l(), (i = void 0);
            }),
            s
          );
        }
        function Jr(t, o, r = {}) {
          const i = r.window,
            s = void 0 === i ? Xr : i,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var o in e)
                    if ({}.hasOwnProperty.call(e, o)) {
                      if (t.indexOf(o) >= 0) continue;
                      n[o] = e[o];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]),
                    t.indexOf(n) >= 0 ||
                      ({}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
              }
              return r;
            })(r, e);
          let l;
          const c = Qr(() => s && "ResizeObserver" in s),
            u = () => {
              l && (l.disconnect(), (l = void 0));
            },
            f = wo(
              _r(() => (Array.isArray(t) ? t.map((e) => Yr(e)) : [Yr(t)])),
              (e) => {
                if ((u(), c.value && s)) {
                  l = new ResizeObserver(o);
                  var t,
                    r = n(e);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      const e = t.value;
                      e && l.observe(e, a);
                    }
                  } catch (i) {
                    r.e(i);
                  } finally {
                    r.f();
                  }
                }
              },
              { immediate: !0, flush: "post" }
            ),
            p = () => {
              u(), f();
            };
          return qr(p), { isSupported: c, stop: p };
        }
        const ei = (e, o) => {
            const r = e.__vccOpts || e;
            var i,
              s = n(o);
            try {
              for (s.s(); !(i = s.n()).done; ) {
                const e = t(i.value, 2),
                  n = e[0],
                  o = e[1];
                r[n] = o;
              }
            } catch (a) {
              s.e(a);
            } finally {
              s.f();
            }
            return r;
          },
          ti = ei(
            yn({
              __name: "index",
              props: {
                designWidth: {},
                minScaleSize: {},
                margin: {},
                padding: {},
              },
              setup(e) {
                const t = e,
                  n = _r(() => {
                    const e = navigator.userAgent;
                    if (/Firefox/.test(e)) return !1;
                    return "zoom" in document.createElement("div").style;
                  }),
                  o = _r(() => {
                    var e, n;
                    const o = /mobile/.test(navigator.userAgent.toLowerCase())
                      ? 750
                      : 1920;
                    return {
                      designWidth:
                        null !== (e = t.designWidth) && void 0 !== e ? e : o,
                      minScaleSize:
                        null !== (n = t.minScaleSize) && void 0 !== n ? n : 0.2,
                    };
                  }),
                  r = bt(1),
                  i = bt(0),
                  s = _r(() => (i.value ? i.value + "px" : "100%")),
                  a = _r(() => (i.value ? i.value / r.value + "px" : "auto")),
                  l = () => {
                    var e, n;
                    const s =
                      ((Math.abs(window.innerWidth - o.value.designWidth) < 2
                        ? o.value.designWidth
                        : window.innerWidth) -
                        (null !== (e = t.margin) && void 0 !== e ? e : 0)) /
                      o.value.designWidth;
                    (r.value =
                      s > o.value.minScaleSize ? s : o.value.minScaleSize),
                      (i.value =
                        window.innerHeight -
                        (null !== (n = t.padding) && void 0 !== n ? n : 0));
                  },
                  c = bt(null);
                return (
                  cn(() => l()),
                  Jr([c, document.body], l),
                  Dn("patchResize", l),
                  (e, t) => (
                    No(),
                    Wo(
                      "div",
                      {
                        class: K(n.value ? "auto-zoom" : "auto-scale"),
                        style: W({
                          "--design-width--": o.value.designWidth + "px",
                          "--scale--": r.value,
                          height: s.value,
                        }),
                        onResize: l,
                      },
                      [
                        Yo(
                          "div",
                          { class: "scroll", style: W({ height: a.value }) },
                          [_n(e.$slots, "default", {}, void 0)],
                          4
                        ),
                      ],
                      38
                    )
                  )
                );
              },
            }),
            [["__scopeId", "data-v-722854c6"]]
          ),
          ni = () => {
            const e = Zr("(orientation: portrait)");
            return _r(
              () =>
                e.value || navigator.userAgent.toLowerCase().includes("mobile")
            );
          },
          oi = "" + new URL("btn-google-Cc_AIs7T.png", r.meta.url).href,
          ri = "" + new URL("part-2-CG4CD9zC.png", r.meta.url).href,
          ii = {
            TermsOfService: "./bp-terms-of-service.html",
            PrivacyPolicy: "./bp-privacy-policy.html",
          },
          si = (e) => (Yt("data-v-14ad7f07"), (e = e()), Xt(), e),
          ai = { class: "part-1" },
          li = { key: 0, class: "bg" },
          ci = si(() => Yo("div", { class: "left" }, null, -1)),
          ui = { class: "right" },
          fi = { class: "navbar" },
          pi = si(() => Yo("h3", { class: "name" }, "Health Life", -1)),
          di = si(() =>
            Yo(
              "div",
              { class: "title" },
              [
                Yo("h2", null, "Record Your"),
                Yo("h2", null, "Healthy Lifestyle"),
              ],
              -1
            )
          ),
          hi = { class: "links" },
          gi = ["href"],
          vi = ["href"],
          mi = ei(
            yn({
              __name: "index",
              setup(e) {
                const t = ni(),
                  n = () => {
                    location.href =
                      "https://play.google.com/store/apps/details?id=com.daist.eine.chichte&hl=en-SG";
                  };
                return (e, o) => {
                  const r = nn("Image");
                  return (
                    No(),
                    Wo("section", ai, [
                      xt(t)
                        ? Jo("", !0)
                        : (No(),
                          Wo("div", li, [
                            ci,
                            Yo("div", ui, [
                              Xo(r, { class: "image", src: xt(ri) }, null, 8, [
                                "src",
                              ]),
                            ]),
                          ])),
                      Yo("div", fi, [
                        Xo(r, { class: "favicon", src: "./favicon.png" }),
                        pi,
                      ]),
                      di,
                      Xo(
                        r,
                        { class: "btn", src: xt(oi), onClick: n },
                        null,
                        8,
                        ["src"]
                      ),
                      Yo("div", hi, [
                        Yo(
                          "a",
                          { href: xt(ii).TermsOfService, target: "_blank" },
                          "Terms of Service",
                          8,
                          gi
                        ),
                        Yo(
                          "a",
                          { href: xt(ii).PrivacyPolicy, target: "_blank" },
                          "Privacy Policy",
                          8,
                          vi
                        ),
                      ]),
                    ])
                  );
                };
              },
            }),
            [["__scopeId", "data-v-14ad7f07"]]
          ),
          bi = { key: 0, class: "part-2" },
          yi = ei(
            yn({
              __name: "index",
              setup(e) {
                const t = ni();
                return (e, n) => {
                  const o = nn("Image");
                  return xt(t)
                    ? (No(),
                      Wo("section", bi, [
                        Xo(o, { class: "image", src: xt(ri) }, null, 8, [
                          "src",
                        ]),
                      ]))
                    : Jo("", !0);
                };
              },
            }),
            [["__scopeId", "data-v-baf7e36e"]]
          ),
          xi = (e) => (Yt("data-v-ac685fb0"), (e = e()), Xt(), e),
          _i = { key: 0, class: "part-3" },
          wi = [
            xi(() =>
              Yo(
                "span",
                null,
                "Easy to use, stay on top of your health status anytime",
                -1
              )
            ),
          ],
          ki = { key: 1, class: "part-3" },
          Si = [
            xi(() => Yo("span", null, "Easy to use", -1)),
            xi(() => Yo("span", null, "stay on top of your health", -1)),
            xi(() => Yo("span", null, "status anytime", -1)),
          ],
          Ci = ei(
            yn({
              __name: "index",
              setup(e) {
                const t = ni();
                return (e, n) =>
                  xt(t)
                    ? (No(), Wo("section", ki, Si))
                    : (No(), Wo("section", _i, wi));
              },
            }),
            [["__scopeId", "data-v-ac685fb0"]]
          ),
          Oi = "" + new URL("part-4-BFbeY5hL.png", r.meta.url).href,
          Ri = { class: "part-4" },
          Ei = ((e) => (Yt("data-v-654964f3"), (e = e()), Xt(), e))(() =>
            Yo(
              "div",
              { class: "text" },
              [
                Yo("span", { class: "title" }, "Record and track"),
                Yo(
                  "span",
                  { class: "desc" },
                  "Continuously record andtrack your health data."
                ),
              ],
              -1
            )
          ),
          Pi = ei(
            yn({
              __name: "index",
              setup: (e) => (e, t) => {
                const n = nn("Image");
                return (
                  No(),
                  Wo("section", Ri, [
                    Ei,
                    Xo(n, { class: "image", src: xt(Oi) }, null, 8, ["src"]),
                  ])
                );
              },
            }),
            [["__scopeId", "data-v-654964f3"]]
          ),
          Fi = "" + new URL("part-5-BdXMUpxz.png", r.meta.url).href,
          Ti = { class: "part-5" },
          zi = ((e) => (Yt("data-v-42481bb5"), (e = e()), Xt(), e))(() =>
            Yo(
              "div",
              { class: "text" },
              [
              ],
              -1
            )
          ),
          Ai = ei(
            yn({
              __name: "index",
              setup: (e) => (e, t) => {
                const n = nn("Image");
                return (
                  No(),
                  Wo("section", Ti, [
                  //   zi,
                  //   Xo(n, { class: "image", src: xt(Fi) }, null, 8, ["src"]),
                  ])
                );
              },
            }),
            [["__scopeId", "data-v-42481bb5"]]
          ),
          Ii = "" + new URL("part-6-DhqTFYIu.png", r.meta.url).href,
          Li = { class: "part-6" },
          ji = ((e) => (Yt("data-v-d68f9ce7"), (e = e()), Xt(), e))(() =>
            Yo(
              "div",
              { class: "text" },
              [
                Yo("span", { class: "title" }, "Browse health information"),
                Yo(
                  "span",
                  { class: "desc" },
                  "Gain health knowledge to help you better manage your health."
                ),
              ],
              -1
            )
          ),
          Mi = ei(
            yn({
              __name: "index",
              setup: (e) => (e, t) => {
                const n = nn("Image");
                return (
                  No(),
                  Wo("section", Li, [
                    ji,
                    Xo(n, { class: "image", src: xt(Ii) }, null, 8, ["src"]),
                  ])
                );
              },
            }),
            [["__scopeId", "data-v-d68f9ce7"]]
          ),
          Ui = (e) => (Yt("data-v-864723da"), (e = e()), Xt(), e),
          Ni = { class: "footer" },
          Vi = [
            Ui(() => Yo("p", null, "NOCEON INC", -1)),
            Ui(() => Yo("span", null, "E-mail: bangomagz@gmail.com", -1)),
          ],
          $i = ei(
            yn({
              __name: "index",
              setup: (e) => (e, t) => (No(), Wo("section", Ni, Vi)),
            }),
            [["__scopeId", "data-v-864723da"]]
          ),
          Bi = yn({
            __name: "index",
            setup(e) {
              const t = ni();
              return (e, n) => (
                No(),
                Do(
                  ti,
                  {
                    class: K(["container", xt(t) ? "portrait" : "landscape"]),
                    "design-width": xt(t) ? 360 : 1920,
                  },
                  {
                    default: Qt(() => [
                      Xo(mi),
                      Xo(yi),
                      Xo(Ci),
                      Xo(Pi),
                      Xo(Ai),
                      Xo(Mi),
                      Xo($i),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class", "design-width"]
                )
              );
            },
          }),
          Wi = ei(
            yn({
              __name: "index",
              setup(e) {
                const t = bt("load");
                let n = Date.now();
                const o = () => {
                    t.value = Date.now() - n < 100 ? "flat" : "loaded";
                  },
                  r = () => {
                    t.value = "fail";
                  };
                return (
                  cn(() => {
                    n = Date.now();
                  }),
                  (e, n) => (
                    No(),
                    Wo(
                      "img",
                      or(e.$attrs, {
                        class: ["image", t.value],
                        onLoad: o,
                        onError: r,
                      }),
                      null,
                      16
                    )
                  )
                );
              },
            }),
            [["__scopeId", "data-v-0af3a064"]]
          );
        ((...e) => {
          const t = (Hr || (Hr = po(Dr))).createApp(...e),
            n = t.mount;
          return (
            (t.mount = (e) => {
              const o = (function (e) {
                if (x(e)) {
                  return document.querySelector(e);
                }
                return e;
              })(e);
              if (!o) return;
              const r = t._component;
              y(r) || r.render || r.template || (r.template = o.innerHTML),
                (o.innerHTML = "");
              const i = n(
                o,
                !1,
                (function (e) {
                  if (e instanceof SVGElement) return "svg";
                  if (
                    "function" == typeof MathMLElement &&
                    e instanceof MathMLElement
                  )
                    return "mathml";
                })(o)
              );
              return (
                o instanceof Element &&
                  (o.removeAttribute("v-cloak"),
                  o.setAttribute("data-v-app", "")),
                i
              );
            }),
            t
          );
        })(Bi)
          .component("Image", Wi)
          .mount("#app");
      },
    };
  });
})();
//# sourceMappingURL=index-legacy-bMBxJc-l.js.map
