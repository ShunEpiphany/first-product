// src/StitchComponent.tsx
export const StitchComponent = () => {
  return (
    /* 使用 font-display 激活配置中的 Manrope 字体 */
    <div className="font-display bg-background-light min-h-screen">
       <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
  {/* Top Navigation */}
  <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <span
              className="material-symbols-outlined text-white text-2xl"
              style={{}}
            >
              analytics
            </span>
          </div>
          <h2
            className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            style={{}}
          >
            AlphaBacktest
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="#"
          >
            投資組合
          </a>
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="#"
          >
            策略
          </a>
          <a
            className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            href="#"
          >
            教程
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        {/* Language Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2">
            <span className="material-symbols-outlined text-lg">language</span>
            语言
            <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">
              expand_more
            </span>
          </button>
          <div className="absolute right-0 top-full mt-1 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            <a
              className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors"
              href="#"
            >
              繁體中文
            </a>
            <a
              className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors"
              href="#"
            >
              简体中文
            </a>
          </div>
        </div>
        {/* Tools Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2">
            <span className="material-symbols-outlined text-lg">
              construction
            </span>
            工具
            <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">
              expand_more
            </span>
          </button>
          <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700 mb-1">
              即將推出
            </div>
            <a
              className="block px-4 py-2 text-sm text-slate-400 cursor-not-allowed"
              href="#"
            >
              進階回測器
            </a>
            <a
              className="block px-4 py-2 text-sm text-slate-400 cursor-not-allowed"
              href="#"
            >
              風險計算器
            </a>
          </div>
        </div>
        {/* Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-2xl">
            person
          </span>
        </div>
      </div>
    </div>
  </header>
  <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 flex flex-col gap-12">
    {/* Hero Section */}
    <section className="grid gap-12 items-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
          <span className="material-symbols-outlined text-sm" style={{}}>
            auto_graph
          </span>
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{}}
          >
            專業級分析
          </span>
        </div>
        <h1
          className="flex flex-col gap-4 text-slate-900 dark:text-white tracking-tight text-center"
          style={{}}
        >
          <span className="text-5xl lg:text-7xl font-black leading-tight">
            精準分析中國股票投資組合
          </span>
          <span
            className="text-primary text-3xl lg:text-5xl font-extrabold"
            style={{}}
          >
            具備專業精度
          </span>
        </h1>
        <p
          className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center mx-auto max-w-2xl"
          style={{}}
        >
          分析和回測您在香港及中國內地市場的投資策略。獲取歷史表現、風險指標及最佳資產配置的深度洞察。
        </p>
        <div className="flex flex-wrap gap-4 mt-2 justify-center">
          <button
            className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
            style={{}}
          >
            創建新組合
          </button>
          <button
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            style={{}}
          >
            查看文檔
          </button>
        </div>
      </div>
    </section>
    {/* Sample Portfolio Section */}
    <section className="bg-white dark:bg-slate-900/50 rounded-3xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Pie Chart Visualization */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-2xl font-extrabold text-slate-900 dark:text-white"
                style={{}}
              >
                投資組合分析結果
              </h2>
              <p className="text-slate-500 text-sm" style={{}}>
                範例投資組合 (2020-2024)
              </p>
            </div>
            <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <span
                className="material-symbols-outlined text-slate-400"
                style={{}}
              >
                more_horiz
              </span>
            </div>
          </div>
          <div className="relative flex justify-center py-4">
            {/* Professional SVG Donut Chart */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Tencent (40%) */}
                <circle
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  stroke="#13c8ec"
                  strokeDasharray="100.53 151.27"
                  strokeDashoffset={0}
                  strokeWidth={12}
                />
                {/* Alibaba (35%) */}
                <circle
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  stroke="#2dd4bf"
                  strokeDasharray="87.96 163.84"
                  strokeDashoffset="-103.04"
                  strokeWidth={12}
                />
                {/* Moutai (25%) */}
                <circle
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  stroke="#cbd5e1"
                  strokeDasharray="62.83 188.97"
                  strokeDashoffset={-191.0}
                  strokeWidth={12}
                />
              </svg>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-slate-900 dark:text-white">
                  100%
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">
                  資產配置
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#13c8ec" }}
              />
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  中國移動 (0941.HK)
                </p>
                <p className="text-xs text-slate-500">40.0% 配置</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-teal-400" />
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  騰訊控股 (0700.HK)
                </p>
                <p className="text-xs text-slate-500">35.0% 配置</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  貴州茅台 (600519.SH)
                </p>
                <p className="text-xs text-slate-500">25.0% 配置</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Historical Performance Summary */}
        <div className="w-full lg:w-96 flex flex-col gap-6">
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-slate-500 text-sm font-medium mb-1" style={{}}>
              範例投資組合 (2020-2024)
            </p>
            <div className="flex items-baseline gap-2">
              <h3
                className="text-4xl font-black text-slate-900 dark:text-white"
                style={{}}
              >
                +84.2%
              </h3>
              <span
                className="text-green-600 font-bold text-sm flex items-center"
                style={{}}
              >
                <span className="material-symbols-outlined text-sm" style={{}}>
                  trending_up
                </span>
                超越市場
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p
                className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2"
                style={{}}
              >
                複合年增長率
              </p>
              <p
                className="text-2xl font-bold text-slate-900 dark:text-white"
                style={{}}
              >
                16.4%
              </p>
              <p className="text-[10px] text-slate-400 mt-1" style={{}}>
                年化增長
              </p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p
                className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2"
                style={{}}
              >
                夏普比率
              </p>
              <p
                className="text-2xl font-bold text-slate-900 dark:text-white"
                style={{}}
              >
                1.82
              </p>
              <p className="text-[10px] text-slate-400 mt-1" style={{}}>
                風險調整後
              </p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p
                className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2"
                style={{}}
              >
                最大回撤
              </p>
              <p className="text-2xl font-bold text-red-500" style={{}}>
                -12.4%
              </p>
              <p className="text-[10px] text-slate-400 mt-1" style={{}}>
                峰值至谷底
              </p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p
                className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2"
                style={{}}
              >
                波動率
              </p>
              <p
                className="text-2xl font-bold text-slate-900 dark:text-white"
                style={{}}
              >
                14.1%
              </p>
              <p className="text-[10px] text-slate-400 mt-1" style={{}}>
                標準差
              </p>
            </div>
          </div>
          <button
            className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
            style={{}}
          >
            探索詳細報告{" "}
            <span className="material-symbols-outlined" style={{}}>
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
    {/* Quick Features */}
    <section className="grid md:grid-cols-3 gap-8 pb-20">
      <div className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 transition-all">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{}}>
            history
          </span>
        </div>
        <h4 className="text-xl font-bold" style={{}}>
          20 年歷史數據
        </h4>
        <p
          className="text-slate-600 dark:text-slate-400 leading-relaxed"
          style={{}}
        >
          獲取香港及上海/深圳交易所乾淨、經調整後的歷史數據。
        </p>
      </div>
      <div className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 transition-all">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{}}>
            balance
          </span>
        </div>
        <h4 className="text-xl font-bold" style={{}}>
          智能再平衡
        </h4>
        <p
          className="text-slate-600 dark:text-slate-400 leading-relaxed"
          style={{}}
        >
          測試每月、每季度或基於閾值的再平衡如何影響您的回報。
        </p>
      </div>
      <div className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 transition-all">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{}}>
            receipt_long
          </span>
        </div>
        <h4 className="text-xl font-bold" style={{}}>
          稅務與股息邏輯
        </h4>
        <p
          className="text-slate-600 dark:text-slate-400 leading-relaxed"
          style={{}}
        >
          準確計算股息再投資及地區稅務影響。
        </p>
      </div>
    </section>
  </main>
  {/* Bottom Footer */}
  <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-12 bg-white dark:bg-background-dark">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-primary/20 p-1 rounded-md">
          <span
            className="material-symbols-outlined text-primary text-xl"
            style={{}}
          >
            analytics
          </span>
        </div>
        <span className="text-lg font-bold tracking-tight" style={{}}>
          AlphaBacktest
        </span>
      </div>
      <div className="flex gap-8">
        <a
          className="text-sm text-slate-500 hover:text-primary transition-colors"
          href="#"
          style={{}}
        >
          隱私政策
        </a>
        <a
          className="text-sm text-slate-500 hover:text-primary transition-colors"
          href="#"
          style={{}}
        >
          服務條款
        </a>
        <a
          className="text-sm text-slate-500 hover:text-primary transition-colors"
          href="#"
          style={{}}
        >
          聯繫支持
        </a>
      </div>
      <p className="text-sm text-slate-400" style={{}}>
        © 2026 AlphaBacktest Analytics. 版權所有。
      </p>
    </div>
  </footer>
</div>

    </div>
  );
};