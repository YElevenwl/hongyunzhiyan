document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    const routeForm = document.getElementById('routeForm');
    const resultContainer = document.getElementById('resultContainer');

    let currentResult = null;

    // 渲染结果函数
    function renderResult(result) {
        currentResult = result;
        const locationsHtml = (result.locations || []).map((loc, index) => 
            `<li><strong>第${index + 1}站：</strong>${loc}</li>`
        ).join('');

        const activitiesHtml = (result.activities || []).map((act, index) => 
            `<li><strong>活动${index + 1}：</strong>${act}</li>`
        ).join('');

        const goalsHtml = (result.goals || []).map((goal, index) => 
            `<li><strong>目标${index + 1}：</strong>${goal}</li>`
        ).join('');

        const safetyHtml = (result.safety || []).map((item, index) => 
            `<li><strong>注意${index + 1}：</strong>${item}</li>`
        ).join('');

        const coursesHtml = (result.courses || []).map((course, index) => 
            `<li><strong>课程${index + 1}：</strong>${course}</li>`
        ).join('');

        const itineraryHtml = (result.itinerary || []).map(day => {
            const sitesHtml = (day.sites || []).map(s => `<span class="site-tag">${s}</span>`).join(' ');
            return `
                <div class="itinerary-day">
                    <h5>${day.title}</h5>
                    <div class="itinerary-detail">
                        <p><strong>🌅 上午：</strong>${(day.morning || '').replace(/\n/g, '<br/>')}</p>
                        <p><strong>☀️ 下午：</strong>${(day.afternoon || '').replace(/\n/g, '<br/>')}</p>
                        ${day.evening ? `<p><strong>🌙 晚上：</strong>${day.evening.replace(/\n/g, '<br/>')}</p>` : ''}
                        <p><strong>📍 景点：</strong>${sitesHtml || '无'}</p>
                        <p><strong>🍽️ 餐饮：</strong>${day.meals}</p>
                    </div>
                </div>
            `;
        }).join('');

        const serviceInfo = [];
        if (result.accommodation) serviceInfo.push(`<li><strong>住宿安排：</strong>${result.accommodation}</li>`);
        if (result.transport) serviceInfo.push(`<li><strong>交通方式：</strong>${result.transport}${result.transportDesc ? '（' + result.transportDesc + '）' : ''}</li>`);
        if (result.mealPlan) serviceInfo.push(`<li><strong>餐饮计划：</strong>${result.mealPlan}</li>`);
        if (result.gradeTip) serviceInfo.push(`<li><strong>师生配比建议：</strong>${result.gradeTip}</li>`);

        const highlightsHtml = (result.highlights || []).map(h => 
            `<span class="highlight-tag">${h}</span>`
        ).join(' ');

        return `
            <div class="result-content">
                <div class="result-header">
                    <h3>${result.name || '研学旅行方案'}</h3>
                    ${result.profile ? `<div class="result-profile">${result.profile}</div>` : ''}
                    <div class="result-meta">
                        <span>主题：${result.theme || '红色教育'}</span>
                        <span>天数：${result.dayLabel || result.days}天</span>
                        <span>年级：${result.grade || '小学'}</span>
                        <span>人数：${result.people || 10}人（${result.teamType || '标准团队'}）</span>
                        <span>出发地：${result.location || '海口'}</span>
                        <span>预算：${result.budget || '120-200元/人'}</span>
                    </div>
                    <div class="result-budget">
                        <span>人均预算：¥${result.perPersonBudget || 160}</span>
                        <span>总预算：¥${result.totalBudget || 1600}</span>
                    </div>
                    ${highlightsHtml ? `<div class="result-highlights">${highlightsHtml}</div>` : ''}
                    ${result.teamDesc ? `<div class="result-team-desc">👥 ${result.teamType}：${result.teamDesc}</div>` : ''}
                </div>

                <h4>🎯 研学目标</h4>
                <ul>${goalsHtml || '<li>暂无目标信息</li>'}</ul>

                <h4>📍 研学地点（共${(result.locations||[]).length}个点位）</h4>
                <ul>${locationsHtml || '<li>暂无地点信息</li>'}</ul>

                <h4>📋 详细行程安排</h4>
                <div class="itinerary-container">${itineraryHtml || '<p>暂无行程信息</p>'}</div>

                ${serviceInfo.length > 0 ? `<h4>🏨 服务保障</h4><ul>${serviceInfo.join('')}</ul>` : ''}

                <h4>🎪 研学活动</h4>
                <ul>${activitiesHtml || '<li>暂无活动信息</li>'}</ul>

                <h4>📚 配套课程</h4>
                <ul>${coursesHtml || '<li>暂无配套课程</li>'}</ul>

                <h4>⚠️ 安全提示</h4>
                <ul>${safetyHtml || '<li>暂无安全提示</li>'}</ul>

                <div class="result-actions">
                    <button class="btn btn-primary" onclick="copyResult()">复制方案</button>
                    <button class="btn btn-primary" onclick="exportPDF()">📄 导出PDF</button>
                    <button class="btn btn-outline" onclick="exportWord()">📝 导出Word</button>
                    <button class="btn btn-outline" onclick="window.print()">🖨️ 打印方案</button>
                </div>
            </div>
        `;
    }

    // 复制方案功能
    window.copyResult = function() {
        const resultContent = document.querySelector('.result-content');
        if (resultContent) {
            const text = resultContent.innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert('方案已复制到剪贴板！');
            }).catch(err => {
                alert('复制失败，请手动复制。');
            });
        } else {
            alert('暂无方案可复制！');
        }
    };

    // 导出 PDF 功能（使用浏览器打印，支持中文）
    window.exportPDF = function() {
        if (!currentResult) {
            alert('先生成方案后再导出！');
            return;
        }

        try {
            const printWindow = window.open('', '_blank');
            
            // 构建完整的行程HTML
            const itineraryHtml = (currentResult.itinerary || []).map(day => {
                const sitesHtml = (day.sites || []).map(s => `<span style="background:#f5f5f5;padding:2px 8px;border-radius:4px;margin:2px;display:inline-block;">${s}</span>`).join(' ');
                return `
                    <div style="border:2px solid #8B0000;border-radius:8px;padding:15px;margin:10px 0;">
                        <h3 style="color:#8B0000;margin-top:0;">${day.title}</h3>
                        <p><strong>🌅 上午：</strong>${(day.morning || '').replace(/\n/g, '<br/>')}</p>
                        <p><strong>☀️ 下午：</strong>${(day.afternoon || '').replace(/\n/g, '<br/>')}</p>
                        ${day.evening ? `<p><strong>🌙 晚上：</strong>${day.evening.replace(/\n/g, '<br/>')}</p>` : ''}
                        <p><strong>📍 景点：</strong>${sitesHtml || '无'}</p>
                        <p><strong>🍽️ 餐饮：</strong>${day.meals}</p>
                    </div>
                `;
            }).join('');

            // 服务保障信息
            const serviceInfo = [];
            if (currentResult.accommodation) serviceInfo.push(`<li><strong>住宿安排：</strong>${currentResult.accommodation}</li>`);
            if (currentResult.transport) serviceInfo.push(`<li><strong>交通方式：</strong>${currentResult.transport}${currentResult.transportDesc ? '（' + currentResult.transportDesc + '）' : ''}</li>`);
            if (currentResult.mealPlan) serviceInfo.push(`<li><strong>餐饮计划：</strong>${currentResult.mealPlan}</li>`);
            if (currentResult.gradeTip) serviceInfo.push(`<li><strong>师生配比建议：</strong>${currentResult.gradeTip}</li>`);

            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>${currentResult.name}</title>
                    <style>
                        body { font-family: "Microsoft YaHei", "SimSun", Arial; padding: 40px; font-size: 14px; line-height:1.8; }
                        .wrapper { border:3px solid #8B0000; padding:40px; border-radius:12px; }
                        h1 { color: #C41E3A; text-align: center; border-bottom: 2px solid #8B0000; padding-bottom: 20px; margin-top:0; }
                        h2 { color: #8B0000; margin-top: 30px; font-size:18px; }
                        h3 { color: #333; }
                        .meta { background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 8px; border-left:4px solid #8B0000; }
                        .meta span { margin-right: 25px; display: inline-block; padding: 5px 0; }
                        .budget { background: #fff8e1; padding:12px; border-radius:8px; margin:10px 0; text-align:center; border-left:4px solid #ffc107; }
                        .budget span { display:inline-block; margin:0 20px; font-weight:bold; }
                        ul { margin: 10px 0; padding-left: 30px; }
                        li { margin: 8px 0; }
                        @media print {
                            body { padding: 20px; }
                            .wrapper { border:3px solid #8B0000; padding:30px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="wrapper">
                        <h1>${currentResult.name}</h1>
                        ${currentResult.profile ? `<p style="text-align:center;color:#666;font-style:italic;">${currentResult.profile}</p>` : ''}
                        
                        <div class="meta">
                            <span><strong>主题：</strong>${currentResult.theme}</span>
                            <span><strong>天数：</strong>${currentResult.dayLabel}</span>
                            <span><strong>年级：</strong>${currentResult.grade}</span>
                        </div>
                        <div class="meta">
                            <span><strong>人数：</strong>${currentResult.people}人（${currentResult.teamType || '标准团队'}）</span>
                            <span><strong>出发地：</strong>${currentResult.location}</span>
                            <span><strong>预算：</strong>${currentResult.budget}</span>
                        </div>
                        
                        <div class="budget">
                            <span>人均预算：¥${currentResult.perPersonBudget}</span>
                            <span>总预算：¥${currentResult.totalBudget}</span>
                        </div>

                        ${currentResult.teamDesc ? `<p><strong>👥 ${currentResult.teamType}：</strong>${currentResult.teamDesc}</p>` : ''}

                        <h2>🎯 研学目标</h2>
                        <ul>
                            ${(currentResult.goals || []).map((g, i) => `<li>${g}</li>`).join('')}
                        </ul>

                        <h2>📍 研学地点（共${(currentResult.locations||[]).length}个点位）</h2>
                        <ul>
                            ${(currentResult.locations || []).map((loc, i) => `<li>第${i + 1}站：${loc}</li>`).join('')}
                        </ul>

                        <h2>📋 详细行程安排</h2>
                        ${itineraryHtml}

                        ${serviceInfo.length > 0 ? `<h2>🏨 服务保障</h2><ul>${serviceInfo.join('')}</ul>` : ''}

                        <h2>🎪 研学活动</h2>
                        <ul>
                            ${(currentResult.activities || []).map((a, i) => `<li>活动${i + 1}：${a}</li>`).join('')}
                        </ul>

                        <h2>📚 配套课程</h2>
                        <ul>
                            ${(currentResult.courses || []).map((c, i) => `<li>课程${i + 1}：${c}</li>`).join('')}
                        </ul>

                        <h2>⚠️ 安全提示</h2>
                        <ul>
                            ${(currentResult.safety || []).map((s, i) => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>

                    <script>
                        window.onload = function() {
                            setTimeout(function(){
                                window.print();
                            }, 300);
                        };
                    <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
        } catch (error) {
            console.error('PDF 导出失败:', error);
            alert('PDF导出失败，请尝试使用页面上的打印按钮！');
        }
    };

    // 导出 Word 功能
    window.exportWord = function() {
        if (!currentResult) {
            alert('先生成方案后再导出！');
            return;
        }

        try {
            // 构建完整的行程HTML
            const itineraryHtml = (currentResult.itinerary || []).map(day => {
                const sitesHtml = (day.sites || []).map(s => `<span style="background:#f5f5f5;padding:2px 8px;border-radius:4px;margin:2px;display:inline-block;">${s}</span>`).join(' ');
                return `
                    <div style="border:2px solid #8B0000;border-radius:8px;padding:15px;margin:10px 0;">
                        <h3 style="color:#8B0000;margin-top:0;">${day.title}</h3>
                        <p><strong>🌅 上午：</strong>${(day.morning || '').replace(/\n/g, '<br/>')}</p>
                        <p><strong>☀️ 下午：</strong>${(day.afternoon || '').replace(/\n/g, '<br/>')}</p>
                        ${day.evening ? `<p><strong>🌙 晚上：</strong>${day.evening.replace(/\n/g, '<br/>')}</p>` : ''}
                        <p><strong>📍 景点：</strong>${sitesHtml || '无'}</p>
                        <p><strong>🍽️ 餐饮：</strong>${day.meals}</p>
                    </div>
                `;
            }).join('');

            // 服务保障信息
            const serviceInfo = [];
            if (currentResult.accommodation) serviceInfo.push(`<li><strong>住宿安排：</strong>${currentResult.accommodation}</li>`);
            if (currentResult.transport) serviceInfo.push(`<li><strong>交通方式：</strong>${currentResult.transport}${currentResult.transportDesc ? '（' + currentResult.transportDesc + '）' : ''}</li>`);
            if (currentResult.mealPlan) serviceInfo.push(`<li><strong>餐饮计划：</strong>${currentResult.mealPlan}</li>`);
            if (currentResult.gradeTip) serviceInfo.push(`<li><strong>师生配比建议：</strong>${currentResult.gradeTip}</li>`);

            let htmlContent = `
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>${currentResult.name}</title>
                        <style>
                            body { font-family: "Microsoft YaHei", Arial; padding: 20px; }
                            .wrapper { border:3px solid #8B0000; padding:40px; border-radius:12px; }
                            h1 { color: #C41E3A; text-align:center; border-bottom:2px solid #8B0000; padding-bottom:15px; }
                            h2 { color: #8B0000; margin-top: 20px; }
                            h3 { color: #333; }
                            .meta { background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius:8px; border-left:4px solid #8B0000; }
                            .meta span { margin-right: 20px; display:inline-block; padding:3px 0; }
                            .budget { background: #fff8e1; padding:12px; border-radius:8px; margin:10px 0; text-align:center; border-left:4px solid #ffc107; }
                            .budget span { display:inline-block; margin:0 20px; font-weight:bold; }
                            ul { margin: 10px 0; padding-left: 25px; }
                            li { margin:8px 0; }
                        </style>
                    </head>
                    <body>
                        <div class="wrapper">
                            <h1>${currentResult.name}</h1>
                            ${currentResult.profile ? `<p style="text-align:center;color:#666;font-style:italic;">${currentResult.profile}</p>` : ''}
                            
                            <div class="meta">
                                <span><strong>主题：</strong>${currentResult.theme}</span>
                                <span><strong>天数：</strong>${currentResult.dayLabel}</span>
                                <span><strong>年级：</strong>${currentResult.grade}</span>
                            </div>
                            <div class="meta">
                                <span><strong>人数：</strong>${currentResult.people}人（${currentResult.teamType || '标准团队'}）</span>
                                <span><strong>出发地：</strong>${currentResult.location}</span>
                                <span><strong>预算：</strong>${currentResult.budget}</span>
                            </div>
                            
                            <div class="budget">
                                <span>人均预算：¥${currentResult.perPersonBudget}</span>
                                <span>总预算：¥${currentResult.totalBudget}</span>
                            </div>

                            ${currentResult.teamDesc ? `<p><strong>👥 ${currentResult.teamType}：</strong>${currentResult.teamDesc}</p>` : ''}

                            <h2>🎯 研学目标</h2>
                            <ul>
                                ${(currentResult.goals || []).map(g => `<li>${g}</li>`).join('')}
                            </ul>

                            <h2>📍 研学地点（共${(currentResult.locations||[]).length}个点位）</h2>
                            <ul>
                                ${(currentResult.locations || []).map((loc, i) => `<li>第${i + 1}站：${loc}</li>`).join('')}
                            </ul>

                            <h2>📋 详细行程安排</h2>
                            ${itineraryHtml}

                            ${serviceInfo.length > 0 ? `<h2>🏨 服务保障</h2><ul>${serviceInfo.join('')}</ul>` : ''}

                            <h2>🎪 研学活动</h2>
                            <ul>
                                ${(currentResult.activities || []).map((a, i) => `<li>活动${i + 1}：${a}</li>`).join('')}
                            </ul>

                            <h2>📚 配套课程</h2>
                            <ul>
                                ${(currentResult.courses || []).map((c, i) => `<li>课程${i + 1}：${c}</li>`).join('')}
                            </ul>

                            <h2>⚠️ 安全提示</h2>
                            <ul>
                                ${(currentResult.safety || []).map((s, i) => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                    </body>
                </html>
            `;

            const blob = new Blob([htmlContent], { type: 'application/msword' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '研学旅行方案.doc';
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Word 导出失败:', error);
            alert('Word导出失败！');
        }
    };

    // 表单提交处理
    routeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = routeForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        resultContainer.innerHTML = '<div style="text-align:center; padding:40px;"><div class="loading-spinner"></div><p>正在生成研学方案...</p></div>';

        // 获取主题：优先用左侧下拉框，如果没有则用右侧，都没有则提示
        const theme1 = document.getElementById('theme1').value;
        const theme2 = document.getElementById('theme2').value;
        let theme = theme1 || theme2;
        if (!theme) {
            alert('请至少选择一个研学主题！');
            const submitBtn = routeForm.querySelector('button[type="submit"]');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            return;
        }
        // 互斥：选了其中一个，清空另一个的值
        if (theme1) document.getElementById('theme2').value = '';
        if (theme2) document.getElementById('theme1').value = '';

        const formData = new FormData(routeForm);
        const params = new URLSearchParams();
        
        params.append('theme', theme);
        params.append('days', formData.get('days') || '1');
        params.append('grade', formData.get('grade') || 'primary');
        params.append('people', formData.get('people') || '20');
        params.append('location', formData.get('location') || 'haikou');
        params.append('budget', formData.get('budget') || 'medium');

        try {
            const result = RouteData.generateRouteResult(
                params.get('theme'),
                params.get('days'),
                params.get('grade'),
                params.get('people'),
                params.get('location'),
                params.get('budget')
            );
            resultContainer.innerHTML = renderResult(result);
        } catch (error) {
            console.error('生成失败:', error);
            resultContainer.innerHTML = `
                <div class="result-content">
                    <div style="color: red; text-align: center; padding: 40px;">
                        <p>生成失败，请检查以下内容：</p>
                        <p>1. 是否选择了完整的表单参数</p>
                        <p>错误信息：${error.message}</p>
                    </div>
                    </div>
                `;
        }
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    });
});
