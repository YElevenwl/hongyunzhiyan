const AdminManager = {
    data: {
        totalUsers: 156,
        totalRoutes: 234,
        totalCourses: 178,
        routeStats: {
            themeStats: { hongse: 89, limiao: 56, haiyang: 45, xiangcun: 38, ziyougang: 6 },
            popularRoute: '红色教育一日研学'
        },
        courseStats: {
            typeStats: { painting: 78, handcraft: 52, heritage: 31, science: 17 },
            themeStats: { hongse: 45, lijin: 38, haiyang: 32, xiangcun: 35, feiyi: 28 }
        }
    },

    init() {
        this.updateUI();
        this.bindEvents();
    },

    bindEvents() {
        document.getElementById('refresh-all-btn').addEventListener('click', () => this.refreshAllData());
        document.getElementById('export-data-btn').addEventListener('click', () => this.exportData());
    },

    updateUI() {
        this.updateOverviewStats();
        this.updateRouteStats();
        this.updateCourseStats();
        this.updateLastTime();
    },

    updateOverviewStats() {
        document.getElementById('total-users').textContent = this.data.totalUsers;
        document.getElementById('total-routes').textContent = this.data.totalRoutes;
        document.getElementById('total-courses').textContent = this.data.totalCourses;
    },

    updateRouteStats() {
        const themeStats = this.data.routeStats.themeStats;
        const total = Object.values(themeStats).reduce((a, b) => a + b, 0) || 1;

        const themePie = document.getElementById('theme-pie-chart');
        const themeData = [
            { name: '红色教育', color: '#C41E3A', count: themeStats.hongse },
            { name: '黎苗文化', color: '#2E7D32', count: themeStats.limiao },
            { name: '海洋科普', color: '#1976D2', count: themeStats.haiyang },
            { name: '乡村振兴', color: '#FF9800', count: themeStats.xiangcun },
            { name: '自贸港', color: '#9C27B0', count: themeStats.ziyougang }
        ];

        themePie.innerHTML = themeData.map(t =>
            `<div class="pie-segment" style="--percentage: ${(t.count / total) * 100}; --color: ${t.color}; background: ${t.color};">
                ${t.name} ${Math.round((t.count / total) * 100)}%
            </div>`
        ).join('');

        document.getElementById('popular-route').textContent = this.data.routeStats.popularRoute;
    },

    updateCourseStats() {
        const typeStats = this.data.courseStats.typeStats;
        const typeBars = document.getElementById('course-type-bars');
        const typeData = [
            { name: '绘画课', count: typeStats.painting },
            { name: '手工课', count: typeStats.handcraft },
            { name: '非遗体验', count: typeStats.heritage },
            { name: '科普绘画', count: typeStats.science }
        ];
        const maxCount = Math.max(...typeData.map(t => t.count), 1);

        typeBars.innerHTML = typeData.map(t => `
            <div class="h-bar-item">
                <span class="h-bar-label">${t.name}</span>
                <div class="h-bar-container"><div class="h-bar-fill" style="width: ${(t.count / maxCount) * 100}%"></div></div>
                <span class="h-bar-value">${t.count}次</span>
            </div>
        `).join('');

        const themeStats = this.data.courseStats.themeStats;
        const tagCloud = document.getElementById('theme-tag-cloud');
        const tagData = [
            { name: '红色文化', count: themeStats.hongse },
            { name: '黎锦纹样', count: themeStats.lijin },
            { name: '海洋生态', count: themeStats.haiyang },
            { name: '乡村风光', count: themeStats.xiangcun },
            { name: '非遗技艺', count: themeStats.feiyi }
        ];
        const maxTagCount = Math.max(...tagData.map(t => t.count), 1);

        tagCloud.innerHTML = tagData.map(t => {
            const size = 12 + Math.round((t.count / maxTagCount) * 8);
            return `<span class="tag" data-count="${t.count}" style="font-size: ${size}px">${t.name} (${t.count})</span>`;
        }).join('');
    },

    updateLastTime() {
        const now = new Date();
        const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        document.getElementById('last-update').textContent = timeStr;
    },

    refreshAllData() {
        this.updateUI();
        alert('数据已刷新！');
    },

    exportData() {
        const exportObj = {
            exportTime: new Date().toISOString(),
            overview: {
                totalUsers: this.data.totalUsers,
                totalRoutes: this.data.totalRoutes,
                totalCourses: this.data.totalCourses
            },
            routeStats: this.data.routeStats,
            courseStats: this.data.courseStats
        };

        const dataStr = JSON.stringify(exportObj, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `红韵智研数据报表_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AdminManager.init();
});