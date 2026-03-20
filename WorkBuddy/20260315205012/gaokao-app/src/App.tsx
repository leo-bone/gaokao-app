import { useState } from 'react'
import './App.css'

// 高考数据 - 2025年全国高校数据（200+所）
const universities = [
  // ==================== 全国顶尖高校 ====================
  { id: 1, name: '清华大学', province: '北京', city: '北京', rank: 1, type: '综合', score: 2025, minScore: 692, minRank: 80, category: '本科一批' },
  { id: 2, name: '北京大学', province: '北京', city: '北京', rank: 2, type: '综合', score: 2025, minScore: 690, minRank: 120, category: '本科一批' },
  { id: 3, name: '中国科学院大学', province: '北京', city: '北京', rank: 3, type: '综合', score: 2025, minScore: 677, minRank: 300, category: '本科一批' },
  { id: 4, name: '上海交通大学', province: '上海', city: '上海', rank: 4, type: '综合', score: 2025, minScore: 685, minRank: 350, category: '本科一批' },
  { id: 5, name: '浙江大学', province: '浙江', city: '杭州', rank: 5, type: '综合', score: 2025, minScore: 680, minRank: 550, category: '本科一批' },
  { id: 6, name: '复旦大学', province: '上海', city: '上海', rank: 6, type: '综合', score: 2025, minScore: 682, minRank: 450, category: '本科一批' },
  { id: 7, name: '南京大学', province: '江苏', city: '南京', rank: 7, type: '综合', score: 2025, minScore: 675, minRank: 800, category: '本科一批' },
  { id: 8, name: '中国科学技术大学', province: '安徽', city: '合肥', rank: 8, type: '理工', score: 2025, minScore: 672, minRank: 1000, category: '本科一批' },
  { id: 9, name: '华中科技大学', province: '湖北', city: '武汉', rank: 9, type: '理工', score: 2025, minScore: 668, minRank: 1500, category: '本科一批' },
  { id: 10, name: '武汉大学', province: '湖北', city: '武汉', rank: 10, type: '综合', score: 2025, minScore: 665, minRank: 1800, category: '本科一批' },
  { id: 11, name: '西安交通大学', province: '陕西', city: '西安', rank: 11, type: '理工', score: 2025, minScore: 660, minRank: 2200, category: '本科一批' },
  { id: 12, name: '中山大学', province: '广东', city: '广州', rank: 12, type: '综合', score: 2025, minScore: 638, minRank: 7500, category: '本科一批' },
  { id: 13, name: '哈尔滨工业大学', province: '黑龙江', city: '哈尔滨', rank: 13, type: '理工', score: 2025, minScore: 658, minRank: 2500, category: '本科一批' },
  { id: 14, name: '同济大学', province: '上海', city: '上海', rank: 14, type: '理工', score: 2025, minScore: 655, minRank: 3000, category: '本科一批' },
  { id: 15, name: '东南大学', province: '江苏', city: '南京', rank: 15, type: '综合', score: 2025, minScore: 650, minRank: 3500, category: '本科一批' },
  { id: 16, name: '北京航空航天大学', province: '北京', city: '北京', rank: 16, type: '理工', score: 2025, minScore: 660, minRank: 2200, category: '本科一批' },
  { id: 17, name: '天津大学', province: '天津', city: '天津', rank: 17, type: '综合', score: 2025, minScore: 645, minRank: 4000, category: '本科一批' },
  { id: 18, name: '四川大学', province: '四川', city: '成都', rank: 18, type: '综合', score: 2025, minScore: 635, minRank: 8500, category: '本科一批' },
  { id: 19, name: '北京师范大学', province: '北京', city: '北京', rank: 19, type: '师范', score: 2025, minScore: 640, minRank: 6500, category: '本科一批' },
  { id: 20, name: '南开大学', province: '天津', city: '天津', rank: 20, type: '综合', score: 2025, minScore: 642, minRank: 6000, category: '本科一批' },

  // ==================== 北京市高校 ====================
  { id: 21, name: '中国人民大学', province: '北京', city: '北京', rank: 5, type: '综合', score: 2025, minScore: 670, minRank: 1000, category: '本科一批' },
  { id: 22, name: '北京理工大学', province: '北京', city: '北京', rank: 22, type: '理工', score: 2025, minScore: 650, minRank: 4000, category: '本科一批' },
  { id: 23, name: '北京邮电大学', province: '北京', city: '北京', rank: 25, type: '理工', score: 2025, minScore: 645, minRank: 4500, category: '本科一批' },
  { id: 24, name: '对外经济贸易大学', province: '北京', city: '北京', rank: 28, type: '财经', score: 2025, minScore: 650, minRank: 4000, category: '本科一批' },
  { id: 25, name: '北京外国语大学', province: '北京', city: '北京', rank: 30, type: '语言', score: 2025, minScore: 640, minRank: 5500, category: '本科一批' },
  { id: 26, name: '中国传媒大学', province: '北京', city: '北京', rank: 35, type: '语言', score: 2025, minScore: 635, minRank: 7000, category: '本科一批' },
  { id: 27, name: '北京科技大学', province: '北京', city: '北京', rank: 33, type: '理工', score: 2025, minScore: 638, minRank: 6500, category: '本科一批' },
  { id: 28, name: '北京交通大学', province: '北京', city: '北京', rank: 38, type: '理工', score: 2025, minScore: 625, minRank: 9000, category: '本科一批' },
  { id: 29, name: '华北电力大学', province: '北京', city: '北京', rank: 42, type: '理工', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 30, name: '北京化工大学', province: '北京', city: '北京', rank: 45, type: '理工', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },

  // ==================== 上海市高校 ====================
  { id: 31, name: '上海财经大学', province: '上海', city: '上海', rank: 23, type: '财经', score: 2025, minScore: 655, minRank: 3000, category: '本科一批' },
  { id: 32, name: '华东师范大学', province: '上海', city: '上海', rank: 24, type: '师范', score: 2025, minScore: 648, minRank: 4500, category: '本科一批' },
  { id: 33, name: '华东理工大学', province: '上海', city: '上海', rank: 36, type: '理工', score: 2025, minScore: 625, minRank: 8500, category: '本科一批' },
  { id: 34, name: '上海外国语大学', province: '上海', city: '上海', rank: 40, type: '语言', score: 2025, minScore: 630, minRank: 7500, category: '本科一批' },
  { id: 35, name: '上海大学', province: '上海', city: '上海', rank: 46, type: '综合', score: 2025, minScore: 618, minRank: 11000, category: '本科一批' },
  { id: 36, name: '东华大学', province: '上海', city: '上海', rank: 48, type: '理工', score: 2025, minScore: 612, minRank: 12500, category: '本科一批' },
  { id: 37, name: '上海海洋大学', province: '上海', city: '上海', rank: 120, type: '农林', score: 2025, minScore: 530, minRank: 85000, category: '本科二批' },

  // ==================== 江苏省高校 ====================
  { id: 38, name: '南京航空航天大学', province: '江苏', city: '南京', rank: 26, type: '理工', score: 2025, minScore: 640, minRank: 5500, category: '本科一批' },
  { id: 39, name: '苏州大学', province: '江苏', city: '苏州', rank: 27, type: '综合', score: 2025, minScore: 635, minRank: 7000, category: '本科一批' },
  { id: 40, name: '南京理工大学', province: '江苏', city: '南京', rank: 31, type: '理工', score: 2025, minScore: 635, minRank: 7000, category: '本科一批' },
  { id: 41, name: '南京医科大学', province: '江苏', city: '南京', rank: 44, type: '医药', score: 2025, minScore: 625, minRank: 9000, category: '本科一批' },
  { id: 42, name: '河海大学', province: '江苏', city: '南京', rank: 37, type: '理工', score: 2025, minScore: 630, minRank: 8000, category: '本科一批' },
  { id: 43, name: '南京师范大学', province: '江苏', city: '南京', rank: 52, type: '师范', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },
  { id: 44, name: '中国矿业大学', province: '江苏', city: '徐州', rank: 41, type: '理工', score: 2025, minScore: 618, minRank: 11000, category: '本科一批' },
  { id: 45, name: '江南大学', province: '江苏', city: '无锡', rank: 49, type: '综合', score: 2025, minScore: 612, minRank: 12500, category: '本科一批' },
  { id: 46, name: '扬州大学', province: '江苏', city: '扬州', rank: 78, type: '综合', score: 2025, minScore: 575, minRank: 40000, category: '本科一批' },
  { id: 47, name: '江苏大学', province: '江苏', city: '镇江', rank: 65, type: '综合', score: 2025, minScore: 590, minRank: 25000, category: '本科一批' },

  // ==================== 浙江省高校 ====================
  { id: 48, name: '浙江大学', province: '浙江', city: '杭州', rank: 5, type: '综合', score: 2025, minScore: 680, minRank: 550, category: '本科一批' },
  { id: 49, name: '浙江工业大学', province: '浙江', city: '杭州', rank: 58, type: '理工', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },
  { id: 50, name: '宁波大学', province: '浙江', city: '宁波', rank: 60, type: '综合', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 51, name: '浙江师范大学', province: '浙江', city: '金华', rank: 68, type: '师范', score: 2025, minScore: 585, minRank: 22000, category: '本科一批' },
  { id: 52, name: '杭州电子科技大学', province: '浙江', city: '杭州', rank: 55, type: '理工', score: 2025, minScore: 605, minRank: 15000, category: '本科一批' },
  { id: 53, name: '浙江理工大学', province: '浙江', city: '杭州', rank: 70, type: '理工', score: 2025, minScore: 580, minRank: 24000, category: '本科一批' },
  { id: 54, name: '温州医科大学', province: '浙江', city: '温州', rank: 63, type: '医药', score: 2025, minScore: 598, minRank: 17000, category: '本科一批' },

  // ==================== 湖北省高校 ====================
  { id: 55, name: '华中科技大学', province: '湖北', city: '武汉', rank: 9, type: '理工', score: 2025, minScore: 668, minRank: 1500, category: '本科一批' },
  { id: 56, name: '武汉大学', province: '湖北', city: '武汉', rank: 10, type: '综合', score: 2025, minScore: 665, minRank: 1800, category: '本科一批' },
  { id: 57, name: '华中师范大学', province: '湖北', city: '武汉', rank: 29, type: '师范', score: 2025, minScore: 630, minRank: 8000, category: '本科一批' },
  { id: 58, name: '中南财经政法大学', province: '湖北', city: '武汉', rank: 34, type: '财经', score: 2025, minScore: 628, minRank: 8500, category: '本科一批' },
  { id: 59, name: '武汉理工大学', province: '湖北', city: '武汉', rank: 39, type: '理工', score: 2025, minScore: 618, minRank: 11000, category: '本科一批' },
  { id: 60, name: '华中农业大学', province: '湖北', city: '武汉', rank: 47, type: '农林', score: 2025, minScore: 605, minRank: 15000, category: '本科一批' },
  { id: 61, name: '中国地质大学(武汉)', province: '湖北', city: '武汉', rank: 43, type: '理工', score: 2025, minScore: 615, minRank: 11500, category: '本科一批' },
  { id: 62, name: '湖北大学', province: '湖北', city: '武汉', rank: 75, type: '综合', score: 2025, minScore: 578, minRank: 38000, category: '本科一批' },
  { id: 63, name: '武汉科技大学', province: '湖北', city: '武汉', rank: 80, type: '理工', score: 2025, minScore: 570, minRank: 45000, category: '本科一批' },

  // ==================== 湖南省高校 ====================
  { id: 64, name: '中南大学', province: '湖南', city: '长沙', rank: 23, type: '综合', score: 2025, minScore: 615, minRank: 11500, category: '本科一批' },
  { id: 65, name: '湖南大学', province: '湖南', city: '长沙', rank: 32, type: '综合', score: 2025, minScore: 610, minRank: 14500, category: '本科一批' },
  { id: 66, name: '国防科技大学', province: '湖南', city: '长沙', rank: 14, type: '理工', score: 2025, minScore: 655, minRank: 2800, category: '本科一批' },
  { id: 67, name: '湖南师范大学', province: '湖南', city: '长沙', rank: 88, type: '师范', score: 2025, minScore: 580, minRank: 34000, category: '本科一批' },
  { id: 68, name: '湘潭大学', province: '湖南', city: '湘潭', rank: 92, type: '综合', score: 2025, minScore: 565, minRank: 46000, category: '本科一批' },
  { id: 69, name: '长沙理工大学', province: '湖南', city: '长沙', rank: 120, type: '理工', score: 2025, minScore: 550, minRank: 63000, category: '本科一批' },
  { id: 70, name: '湖南农业大学', province: '湖南', city: '长沙', rank: 150, type: '农林', score: 2025, minScore: 520, minRank: 92000, category: '本科一批' },
  { id: 71, name: '湖南中医药大学', province: '湖南', city: '长沙', rank: 190, type: '医药', score: 2025, minScore: 510, minRank: 110000, category: '本科一批' },
  { id: 72, name: '中南林业科技大学', province: '湖南', city: '长沙', rank: 180, type: '农林', score: 2025, minScore: 508, minRank: 112000, category: '本科二批' },
  { id: 73, name: '湖南科技大学', province: '湖南', city: '湘潭', rank: 200, type: '综合', score: 2025, minScore: 500, minRank: 128000, category: '本科二批' },
  { id: 74, name: '南华大学', province: '湖南', city: '衡阳', rank: 210, type: '理工', score: 2025, minScore: 495, minRank: 142000, category: '本科二批' },
  { id: 75, name: '湖南工商大学', province: '湖南', city: '长沙', rank: 220, type: '财经', score: 2025, minScore: 488, minRank: 155000, category: '本科二批' },

  // ==================== 广东省高校 ====================
  { id: 76, name: '中山大学', province: '广东', city: '广州', rank: 12, type: '综合', score: 2025, minScore: 638, minRank: 7500, category: '本科一批' },
  { id: 77, name: '华南理工大学', province: '广东', city: '广州', rank: 24, type: '理工', score: 2025, minScore: 620, minRank: 10500, category: '本科一批' },
  { id: 78, name: '暨南大学', province: '广东', city: '广州', rank: 50, type: '综合', score: 2025, minScore: 600, minRank: 19000, category: '本科一批' },
  { id: 79, name: '华南师范大学', province: '广东', city: '广州', rank: 51, type: '师范', score: 2025, minScore: 588, minRank: 27000, category: '本科一批' },
  { id: 80, name: '深圳大学', province: '广东', city: '深圳', rank: 68, type: '综合', score: 2025, minScore: 598, minRank: 21000, category: '本科一批' },
  { id: 81, name: '南方医科大学', province: '广东', city: '广州', rank: 85, type: '医药', score: 2025, minScore: 582, minRank: 31000, category: '本科一批' },
  { id: 82, name: '华南农业大学', province: '广东', city: '广州', rank: 95, type: '农林', score: 2025, minScore: 558, minRank: 53000, category: '本科一批' },
  { id: 83, name: '广州医科大学', province: '广东', city: '广州', rank: 100, type: '医药', score: 2025, minScore: 565, minRank: 48000, category: '本科一批' },
  { id: 84, name: '广东工业大学', province: '广东', city: '广州', rank: 115, type: '理工', score: 2025, minScore: 555, minRank: 56000, category: '本科一批' },
  { id: 85, name: '广州大学', province: '广东', city: '广州', rank: 110, type: '综合', score: 2025, minScore: 548, minRank: 68000, category: '本科一批' },
  { id: 86, name: '汕头大学', province: '广东', city: '汕头', rank: 130, type: '综合', score: 2025, minScore: 540, minRank: 76000, category: '本科二批' },
  { id: 87, name: '广东外语外贸大学', province: '广东', city: '广州', rank: 105, type: '语言', score: 2025, minScore: 552, minRank: 62000, category: '本科二批' },
  { id: 88, name: '广州中医药大学', province: '广东', city: '广州', rank: 120, type: '医药', score: 2025, minScore: 545, minRank: 70000, category: '本科二批' },
  { id: 89, name: '广东财经大学', province: '广东', city: '广州', rank: 125, type: '财经', score: 2025, minScore: 535, minRank: 80000, category: '本科二批' },

  // ==================== 四川省高校 ====================
  { id: 90, name: '四川大学', province: '四川', city: '成都', rank: 18, type: '综合', score: 2025, minScore: 635, minRank: 8500, category: '本科一批' },
  { id: 91, name: '电子科技大学', province: '四川', city: '成都', rank: 21, type: '理工', score: 2025, minScore: 655, minRank: 3000, category: '本科一批' },
  { id: 92, name: '西南交通大学', province: '四川', city: '成都', rank: 36, type: '理工', score: 2025, minScore: 625, minRank: 8500, category: '本科一批' },
  { id: 93, name: '四川农业大学', province: '四川', city: '雅安', rank: 99, type: '农林', score: 2025, minScore: 565, minRank: 48000, category: '本科一批' },
  { id: 94, name: '成都理工大学', province: '四川', city: '成都', rank: 82, type: '理工', score: 2025, minScore: 575, minRank: 42000, category: '本科一批' },
  { id: 95, name: '西南财经大学', province: '四川', city: '成都', rank: 53, type: '财经', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 96, name: '四川师范大学', province: '四川', city: '成都', rank: 95, type: '师范', score: 2025, minScore: 560, minRank: 52000, category: '本科一批' },
  { id: 97, name: '西南石油大学', province: '四川', city: '成都', rank: 105, type: '理工', score: 2025, minScore: 550, minRank: 63000, category: '本科一批' },

  // ==================== 陕西省高校 ====================
  { id: 98, name: '西安交通大学', province: '陕西', city: '西安', rank: 11, type: '理工', score: 2025, minScore: 660, minRank: 2200, category: '本科一批' },
  { id: 99, name: '西北工业大学', province: '陕西', city: '西安', rank: 24, type: '理工', score: 2025, minScore: 645, minRank: 4500, category: '本科一批' },
  { id: 100, name: '西安电子科技大学', province: '陕西', city: '西安', rank: 37, type: '理工', score: 2025, minScore: 625, minRank: 8500, category: '本科一批' },
  { id: 101, name: '西北农林科技大学', province: '陕西', city: '咸阳', rank: 56, type: '农林', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 102, name: '陕西师范大学', province: '陕西', city: '西安', rank: 61, type: '师范', score: 2025, minScore: 585, minRank: 22000, category: '本科一批' },
  { id: 103, name: '长安大学', province: '陕西', city: '西安', rank: 64, type: '理工', score: 2025, minScore: 588, minRank: 20000, category: '本科一批' },
  { id: 104, name: '西安建筑科技大学', province: '陕西', city: '西安', rank: 90, type: '理工', score: 2025, minScore: 565, minRank: 48000, category: '本科一批' },

  // ==================== 山东省高校 ====================
  { id: 105, name: '山东大学', province: '山东', city: '济南', rank: 22, type: '综合', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 106, name: '中国海洋大学', province: '山东', city: '青岛', rank: 28, type: '综合', score: 2025, minScore: 615, minRank: 11000, category: '本科一批' },
  { id: 107, name: '山东科技大学', province: '山东', city: '青岛', rank: 100, type: '理工', score: 2025, minScore: 540, minRank: 76000, category: '本科一批' },
  { id: 108, name: '中国石油大学(华东)', province: '山东', city: '青岛', rank: 73, type: '理工', score: 2025, minScore: 585, minRank: 22000, category: '本科一批' },
  { id: 109, name: '济南大学', province: '山东', city: '济南', rank: 145, type: '综合', score: 2025, minScore: 520, minRank: 92000, category: '本科二批' },
  { id: 110, name: '青岛大学', province: '山东', city: '青岛', rank: 110, type: '综合', score: 2025, minScore: 545, minRank: 70000, category: '本科一批' },

  // ==================== 河南省高校 ====================
  { id: 111, name: '郑州大学', province: '河南', city: '郑州', rank: 42, type: '综合', score: 2025, minScore: 598, minRank: 17000, category: '本科一批' },
  { id: 112, name: '河南大学', province: '河南', city: '开封', rank: 85, type: '综合', score: 2025, minScore: 565, minRank: 48000, category: '本科一批' },
  { id: 113, name: '河南科技大学', province: '河南', city: '洛阳', rank: 130, type: '理工', score: 2025, minScore: 530, minRank: 85000, category: '本科二批' },
  { id: 114, name: '河南师范大学', province: '河南', city: '新乡', rank: 125, type: '师范', score: 2025, minScore: 535, minRank: 80000, category: '本科二批' },

  // ==================== 安徽省高校 ====================
  { id: 115, name: '中国科学技术大学', province: '安徽', city: '合肥', rank: 8, type: '理工', score: 2025, minScore: 672, minRank: 1000, category: '本科一批' },
  { id: 116, name: '合肥工业大学', province: '安徽', city: '合肥', rank: 48, type: '理工', score: 2025, minScore: 608, minRank: 14000, category: '本科一批' },
  { id: 117, name: '安徽大学', province: '安徽', city: '合肥', rank: 70, type: '综合', score: 2025, minScore: 580, minRank: 24000, category: '本科一批' },
  { id: 118, name: '安徽医科大学', province: '安徽', city: '合肥', rank: 85, type: '医药', score: 2025, minScore: 575, minRank: 28000, category: '本科一批' },

  // ==================== 福建省高校 ====================
  { id: 119, name: '厦门大学', province: '福建', city: '厦门', rank: 20, type: '综合', score: 2025, minScore: 630, minRank: 8000, category: '本科一批' },
  { id: 120, name: '福州大学', province: '福建', city: '福州', rank: 54, type: '综合', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },
  { id: 121, name: '福建师范大学', province: '福建', city: '福州', rank: 75, type: '师范', score: 2025, minScore: 575, minRank: 30000, category: '本科一批' },
  { id: 122, name: '华侨大学', province: '福建', city: '泉州', rank: 95, type: '综合', score: 2025, minScore: 555, minRank: 55000, category: '本科一批' },

  // ==================== 辽宁省高校 ====================
  { id: 123, name: '大连理工大学', province: '辽宁', city: '大连', rank: 26, type: '理工', score: 2025, minScore: 640, minRank: 5500, category: '本科一批' },
  { id: 124, name: '东北大学', province: '辽宁', city: '沈阳', rank: 28, type: '综合', score: 2025, minScore: 630, minRank: 8000, category: '本科一批' },
  { id: 125, name: '大连海事大学', province: '辽宁', city: '大连', rank: 68, type: '理工', score: 2025, minScore: 585, minRank: 22000, category: '本科一批' },
  { id: 126, name: '辽宁大学', province: '辽宁', city: '沈阳', rank: 80, type: '综合', score: 2025, minScore: 570, minRank: 35000, category: '本科一批' },
  { id: 127, name: '东北财经大学', province: '辽宁', city: '大连', rank: 72, type: '财经', score: 2025, minScore: 580, minRank: 28000, category: '本科一批' },

  // ==================== 吉林省高校 ====================
  { id: 128, name: '吉林大学', province: '吉林', city: '长春', rank: 23, type: '综合', score: 2025, minScore: 615, minRank: 11000, category: '本科一批' },
  { id: 129, name: '东北师范大学', province: '吉林', city: '长春', rank: 52, type: '师范', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 130, name: '长春理工大学', province: '吉林', city: '长春', rank: 100, type: '理工', score: 2025, minScore: 545, minRank: 70000, category: '本科一批' },

  // ==================== 黑龙江省高校 ====================
  { id: 131, name: '哈尔滨工业大学', province: '黑龙江', city: '哈尔滨', rank: 13, type: '理工', score: 2025, minScore: 658, minRank: 2500, category: '本科一批' },
  { id: 132, name: '哈尔滨工程大学', province: '黑龙江', city: '哈尔滨', rank: 56, type: '理工', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 133, name: '东北林业大学', province: '黑龙江', city: '哈尔滨', rank: 105, type: '农林', score: 2025, minScore: 550, minRank: 63000, category: '本科一批' },
  { id: 134, name: '东北农业大学', province: '黑龙江', city: '哈尔滨', rank: 115, type: '农林', score: 2025, minScore: 535, minRank: 80000, category: '本科一批' },

  // ==================== 河北省高校 ====================
  { id: 135, name: '燕山大学', province: '河北', city: '秦皇岛', rank: 73, type: '理工', score: 2025, minScore: 578, minRank: 30000, category: '本科一批' },
  { id: 136, name: '河北大学', province: '河北', city: '保定', rank: 100, type: '综合', score: 2025, minScore: 545, minRank: 70000, category: '本科一批' },
  { id: 137, name: '石家庄铁道大学', province: '河北', city: '石家庄', rank: 110, type: '理工', score: 2025, minScore: 540, minRank: 76000, category: '本科一批' },
  { id: 138, name: '河北师范大学', province: '河北', city: '石家庄', rank: 115, type: '师范', score: 2025, minScore: 530, minRank: 85000, category: '本科二批' },

  // ==================== 山西省高校 ====================
  { id: 139, name: '太原理工大学', province: '山西', city: '太原', rank: 78, type: '理工', score: 2025, minScore: 575, minRank: 35000, category: '本科一批' },
  { id: 140, name: '山西大学', province: '山西', city: '太原', rank: 85, type: '综合', score: 2025, minScore: 565, minRank: 45000, category: '本科一批' },
  { id: 141, name: '中北大学', province: '山西', city: '太原', rank: 95, type: '理工', score: 2025, minScore: 550, minRank: 60000, category: '本科一批' },

  // ==================== 江西省高校 ====================
  { id: 142, name: '南昌大学', province: '江西', city: '南昌', rank: 58, type: '综合', score: 2025, minScore: 590, minRank: 20000, category: '本科一批' },
  { id: 143, name: '江西财经大学', province: '江西', city: '南昌', rank: 72, type: '财经', score: 2025, minScore: 575, minRank: 30000, category: '本科一批' },
  { id: 144, name: '江西师范大学', province: '江西', city: '南昌', rank: 90, type: '师范', score: 2025, minScore: 555, minRank: 50000, category: '本科一批' },

  // ==================== 重庆市高校 ====================
  { id: 145, name: '重庆大学', province: '重庆', city: '重庆', rank: 27, type: '综合', score: 2025, minScore: 625, minRank: 8500, category: '本科一批' },
  { id: 146, name: '西南大学', province: '重庆', city: '重庆', rank: 40, type: '综合', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 147, name: '重庆医科大学', province: '重庆', city: '重庆', rank: 65, type: '医药', score: 2025, minScore: 595, minRank: 20000, category: '本科一批' },
  { id: 148, name: '重庆邮电大学', province: '重庆', city: '重庆', rank: 85, type: '理工', score: 2025, minScore: 575, minRank: 30000, category: '本科一批' },
  { id: 149, name: '重庆交通大学', province: '重庆', city: '重庆', rank: 105, type: '理工', score: 2025, minScore: 545, minRank: 70000, category: '本科一批' },

  // ==================== 天津市高校 ====================
  { id: 150, name: '天津大学', province: '天津', city: '天津', rank: 17, type: '综合', score: 2025, minScore: 645, minRank: 4000, category: '本科一批' },
  { id: 151, name: '南开大学', province: '天津', city: '天津', rank: 20, type: '综合', score: 2025, minScore: 642, minRank: 4500, category: '本科一批' },
  { id: 152, name: '天津医科大学', province: '天津', city: '天津', rank: 55, type: '医药', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },
  { id: 153, name: '天津财经大学', province: '天津', city: '天津', rank: 90, type: '财经', score: 2025, minScore: 560, minRank: 45000, category: '本科一批' },

  // ==================== 云南省高校 ====================
  { id: 154, name: '云南大学', province: '云南', city: '昆明', rank: 65, type: '综合', score: 2025, minScore: 585, minRank: 22000, category: '本科一批' },
  { id: 155, name: '昆明理工大学', province: '云南', city: '昆明', rank: 90, type: '理工', score: 2025, minScore: 550, minRank: 60000, category: '本科一批' },
  { id: 156, name: '云南师范大学', province: '云南', city: '昆明', rank: 110, type: '师范', score: 2025, minScore: 530, minRank: 85000, category: '本科二批' },

  // ==================== 广西高校 ====================
  { id: 157, name: '广西大学', province: '广西', city: '南宁', rank: 82, type: '综合', score: 2025, minScore: 570, minRank: 35000, category: '本科一批' },
  { id: 158, name: '桂林电子科技大学', province: '广西', city: '桂林', rank: 105, type: '理工', score: 2025, minScore: 540, minRank: 75000, category: '本科一批' },
  { id: 159, name: '广西师范大学', province: '广西', city: '桂林', rank: 115, type: '师范', score: 2025, minScore: 525, minRank: 90000, category: '本科二批' },

  // ==================== 贵州省高校 ====================
  { id: 160, name: '贵州大学', province: '贵州', city: '贵阳', rank: 88, type: '综合', score: 2025, minScore: 565, minRank: 45000, category: '本科一批' },
  { id: 161, name: '贵州师范大学', province: '贵州', city: '贵阳', rank: 130, type: '师范', score: 2025, minScore: 510, minRank: 110000, category: '本科二批' },

  // ==================== 甘肃省高校 ====================
  { id: 162, name: '兰州大学', province: '甘肃', city: '兰州', rank: 32, type: '综合', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 163, name: '西北师范大学', province: '甘肃', city: '兰州', rank: 115, type: '师范', score: 2025, minScore: 530, minRank: 85000, category: '本科二批' },

  // ==================== 海南省高校 ====================
  { id: 164, name: '海南大学', province: '海南', city: '海口', rank: 95, type: '综合', score: 2025, minScore: 555, minRank: 55000, category: '本科一批' },

  // ==================== 内蒙古高校 ====================
  { id: 165, name: '内蒙古大学', province: '内蒙古', city: '呼和浩特', rank: 100, type: '综合', score: 2025, minScore: 545, minRank: 70000, category: '本科一批' },

  // ==================== 宁夏高校 ====================
  { id: 166, name: '宁夏大学', province: '宁夏', city: '银川', rank: 110, type: '综合', score: 2025, minScore: 535, minRank: 80000, category: '本科一批' },

  // ==================== 青海高校 ====================
  { id: 167, name: '青海大学', province: '青海', city: '西宁', rank: 120, type: '综合', score: 2025, minScore: 490, minRank: 140000, category: '本科二批' },

  // ==================== 新疆高校 ====================
  { id: 168, name: '新疆大学', province: '新疆', city: '乌鲁木齐', rank: 108, type: '综合', score: 2025, minScore: 520, minRank: 95000, category: '本科一批' },
  { id: 169, name: '石河子大学', province: '新疆', city: '石河子', rank: 115, type: '综合', score: 2025, minScore: 485, minRank: 145000, category: '本科二批' },

  // ==================== 西藏高校 ====================
  { id: 170, name: '西藏大学', province: '西藏', city: '拉萨', rank: 130, type: '综合', score: 2025, minScore: 450, minRank: 180000, category: '本科二批' },

  // ==================== 专科院校 - 全国优质专科 ====================
  // 湖南省专科
  { id: 171, name: '长沙民政职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 420, minRank: 300000, category: '专科' },
  { id: 172, name: '湖南铁道职业技术学院', province: '湖南', city: '株洲', rank: 0, type: '专科', score: 2025, minScore: 400, minRank: 320000, category: '专科' },
  { id: 173, name: '长沙航空职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 390, minRank: 340000, category: '专科' },
  { id: 174, name: '湖南汽车工程职业学院', province: '湖南', city: '株洲', rank: 0, type: '专科', score: 2025, minScore: 380, minRank: 350000, category: '专科' },
  { id: 175, name: '湖南交通职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 370, minRank: 360000, category: '专科' },
  { id: 176, name: '湖南工业职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 365, minRank: 370000, category: '专科' },
  { id: 177, name: '湖南大众传媒职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 360, minRank: 380000, category: '专科' },
  { id: 178, name: '湖南信息职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 355, minRank: 385000, category: '专科' },
  { id: 179, name: '湖南机电职业技术学院', province: '湖南', city: '长沙', rank: 0, type: '专科', score: 2025, minScore: 350, minRank: 390000, category: '专科' },
  { id: 180, name: '湖南化工职业技术学院', province: '湖南', city: '株洲', rank: 0, type: '专科', score: 2025, minScore: 340, minRank: 400000, category: '专科' },
  // 广东省专科
  { id: 181, name: '深圳职业技术学院', province: '广东', city: '深圳', rank: 0, type: '专科', score: 2025, minScore: 450, minRank: 280000, category: '专科' },
  { id: 182, name: '深圳信息职业技术学院', province: '广东', city: '深圳', rank: 0, type: '专科', score: 2025, minScore: 440, minRank: 290000, category: '专科' },
  { id: 183, name: '广州番禺职业技术学院', province: '广东', city: '广州', rank: 0, type: '专科', score: 2025, minScore: 430, minRank: 310000, category: '专科' },
  { id: 184, name: '顺德职业技术学院', province: '广东', city: '佛山', rank: 0, type: '专科', score: 2025, minScore: 420, minRank: 320000, category: '专科' },
  { id: 185, name: '广东轻工职业技术学院', province: '广东', city: '广州', rank: 0, type: '专科', score: 2025, minScore: 410, minRank: 330000, category: '专科' },
  { id: 186, name: '广州铁路职业技术学院', province: '广东', city: '广州', rank: 0, type: '专科', score: 2025, minScore: 400, minRank: 340000, category: '专科' },
  { id: 187, name: '中山职业技术学院', province: '广东', city: '中山', rank: 0, type: '专科', score: 2025, minScore: 380, minRank: 360000, category: '专科' },
  { id: 188, name: '珠海城市职业技术学院', province: '广东', city: '珠海', rank: 0, type: '专科', score: 2025, minScore: 370, minRank: 370000, category: '专科' },
  { id: 189, name: '东莞职业技术学院', province: '广东', city: '东莞', rank: 0, type: '专科', score: 2025, minScore: 365, minRank: 380000, category: '专科' },
  { id: 190, name: '佛山职业技术学院', province: '广东', city: '佛山', rank: 0, type: '专科', score: 2025, minScore: 360, minRank: 390000, category: '专科' },
  // 全国知名专科
  { id: 191, name: '南京铁道职业技术学院', province: '江苏', city: '南京', rank: 0, type: '专科', score: 2025, minScore: 492, minRank: 205000, category: '专科' },
  { id: 192, name: '重庆城市管理职业学院', province: '重庆', city: '重庆', rank: 0, type: '专科', score: 2025, minScore: 483, minRank: 220000, category: '专科' },
  { id: 193, name: '石家庄邮电职业技术学院', province: '河北', city: '石家庄', rank: 0, type: '专科', score: 2025, minScore: 482, minRank: 225000, category: '专科' },
  { id: 194, name: '郑州铁路职业技术学院', province: '河南', city: '郑州', rank: 0, type: '专科', score: 2025, minScore: 471, minRank: 240000, category: '专科' },
  { id: 195, name: '浙江金融职业学院', province: '浙江', city: '杭州', rank: 0, type: '专科', score: 2025, minScore: 467, minRank: 250000, category: '专科' },
  { id: 196, name: '天津职业大学', province: '天津', city: '天津', rank: 0, type: '专科', score: 2025, minScore: 430, minRank: 310000, category: '专科' },
  { id: 197, name: '北京电子科技职业学院', province: '北京', city: '北京', rank: 0, type: '专科', score: 2025, minScore: 420, minRank: 330000, category: '专科' },
  { id: 198, name: '上海工艺美术职业学院', province: '上海', city: '上海', rank: 0, type: '专科', score: 2025, minScore: 410, minRank: 350000, category: '专科' },
  { id: 199, name: '武汉职业技术学院', province: '湖北', city: '武汉', rank: 0, type: '专科', score: 2025, minScore: 400, minRank: 360000, category: '专科' },
  { id: 200, name: '成都航空职业技术学院', province: '四川', city: '成都', rank: 0, type: '专科', score: 2025, minScore: 395, minRank: 370000, category: '专科' },
  { id: 201, name: '山东商业职业技术学院', province: '山东', city: '济南', rank: 0, type: '专科', score: 2025, minScore: 390, minRank: 380000, category: '专科' },
  { id: 202, name: '陕西工业职业技术学院', province: '陕西', city: '咸阳', rank: 0, type: '专科', score: 2025, minScore: 380, minRank: 390000, category: '专科' },
  { id: 203, name: '辽宁省交通高等专科学校', province: '辽宁', city: '沈阳', rank: 0, type: '专科', score: 2025, minScore: 375, minRank: 400000, category: '专科' },
  { id: 204, name: '黑龙江建筑职业技术学院', province: '黑龙江', city: '哈尔滨', rank: 0, type: '专科', score: 2025, minScore: 360, minRank: 420000, category: '专科' },
  { id: 205, name: '江西应用技术职业学院', province: '江西', city: '赣州', rank: 0, type: '专科', score: 2025, minScore: 350, minRank: 440000, category: '专科' },
]

// 2025年专业描述数据（按专业名称映射到简单介绍）
const majorDescriptions: Record<string, string> = {
  '临床医学（八年制）': '本博连读，培养临床医学博士。毕业可获执业医师资格，就业于三甲医院，薪酬优厚。学制长（8年），需读博后才能正式执业。',
  '临床医学（五年制）': '五年制医学本科，需考研读博后成为执业医师。主要学习内外科、诊断学等，毕业后可在各级医院就业。',
  '临床医学': '传统五年制医学，培养临床医生。需通过执业医师考试，考研后发展更好。就业方向为各级医院、诊所。',
  '口腔医学': '学习口腔疾病预防与治疗，包括牙科手术、正畸、种植等。就业于口腔医院、牙科诊所，整形美容方向收入高。',
  '生物医学工程': '交叉学科，结合生物学与工程技术。研究医疗器械、生物材料、人工器官等，就业于医疗器械公司、医院设备科。',
  '人工智能': '研究机器学习、深度学习、自然语言处理等。就业于互联网公司、AI创业企业、科研院所，薪酬水平极高。',
  '计算机科学': '研究软件开发、算法、操作系统等。就业最广，互联网、金融、游戏、自动驾驶等各行业均需。',
  '生物科学': '研究生命现象与规律，包括细胞、基因、进化等。就职于科研院所、生物公司，继续深造比例高。',
  '药学': '研究药物研发、临床药学、药物分析等。就业于药企、医院药房、药品监管机构，CRO公司需求大。',
  '材料科学与工程': '研究金属、陶瓷、高分子等材料性能与加工。就业于航空航天、电子、汽车、建材等行业的研发与制造。',
  '机械工程': '研究机械设计、制造、自动控制。就业于制造业、汽车、航空航天、能源等，工作稳定。',
  '护理学': '学习临床护理、急救、康复等。就业缺口大，各级医院、社区卫生中心均需，本科就业优势明显。',
  '生物技术': '应用生物学原理于生产实践，包括基因工程、酶工程等。就业于生物制药、食品、环保等企业。',
  '化学工程与工艺': '研究化工生产过程、设计与管理。就业于化工、石油、食品、医药等行业的大型企业。',
  '软件工程': '专注于软件系统开发与管理，涵盖需求分析、设计、测试、维护。就业于IT公司、互联网企业。',
  '电子信息工程': '学习电子电路、信号处理、通信技术等。就业于通信公司、电子制造商、研究所。',
  '医学检验技术': '学习医学检验原理与技术操作。就业于医院检验科、疾控中心、第三方检验机构，工作相对稳定。',
  '康复治疗学': '学习物理治疗、作业治疗、言语治疗等。就业于康复医院、体育医疗机构，老龄化社会需求快速增长。',
  '生物工程': '利用生物体系进行产品制造，包括发酵工程、细胞工程等。就业于食品、制药、环保等企业。',
  '应用化学': '研究化学原理在实际中的应用，包括分析化学、有机合成等。就业于化工、制药、材料企业。',
  '食品科学与工程': '研究食品加工、保鲜、质量安全。就业于食品企业、检测机构、政府监管部门。',
  '环境工程': '研究污染防治与环境修复。就业于环保企业、设计院、政府环保部门，新能源政策推动需求增长。',
  '动物医学': '学习动物疾病诊疗与预防，可考取兽医资格证。就业于宠物医院、养殖场、检疫机构。',
  '农学': '研究作物遗传育种、栽培技术等。就业于农业科研院所、农业企业、农场，考公/事业编有优势。',
  '园艺': '学习果树、蔬菜、花卉的栽培与育种。就业于园艺企业、公园景区、农业科技公司。',
  '生物制药技术': '应用生物技术研发药物，包括疫苗、抗体药物等。就业于生物制药企业、研发机构。',
  '化工技术': '学习化工生产操作与工艺控制。就业于化工企业，操作工岗位需求大，专科技能型。',
  '植物保护': '研究农作物病虫害防治与农药使用。就业于农业技术推广部门、植保站、农业企业。',
  '农业资源与环境': '研究农业资源利用与环境保护。就业于农业局、环保局、农业企业。',
  '畜牧兽医': '学习动物饲养管理与疾病防治。就业于大型养殖场、兽医站、宠物医院。',
  '法学': '学习法律理论与实务，包括民法、刑法、商法等。就业方向为律所、法务、法院、检察院。',
  '软件工程': '专注软件开发与项目管理。就业广，薪酬高，游戏、互联网、金融均可。',
  '网络工程': '学习网络架构设计与信息安全。就业于运营商、网络安全企业、互联网公司。',
  '信息安全': '研究网络攻防、密码学、安全策略。就业于网络安全企业、互联网公司、金融机构。',
  '通信工程': '学习信号处理与通信系统设计。就业于华为、中兴等通信企业，5G时代需求大。',
  '治安学': '学习社会治安管理与行政执法。就业方向为公安机关、派出所、城管等。',
  '侦查学': '研究犯罪侦查方法与刑事技术。就业于公安机关、检察院、反贪局。',
  '公安管理学': '学习公安机关管理与警务指挥。就业于公安机关各级单位。',
  '网络安全与执法': '研究网络犯罪侦查与电子取证。就业于网警、网络安全公司。',
  '监狱学': '研究监狱管理教育与矫正技术。就业于监狱、戒毒所、司法系统。',
  '行政管理': '学习政府与企业行政事务管理。就业广，政府机关、事业单位、企业均可。',
  '政治学与行政学': '研究政治理论与政府管理。就业于政府机关、事业单位、国际组织。',
  '计算机科学与技术': '系统学习计算机软硬件知识。就业最广，各行业均需。',
  '建筑学': '学习建筑设计理论与方法，需美术基础。就业于建筑设计院、房地产公司，一线城市收入高。',
  '城乡规划': '研究城市规划与设计。就业于规划院、建设局、房地产公司。',
  '风景园林': '学习景观设计与绿地规划。就业于园林设计院、地产公司、旅游景区。',
  '土木工程': '学习建筑结构与道路桥梁设计。就业于建筑公司、设计院房地产开发商，工作条件较艰苦。',
  '水利工程': '研究水资源开发利用与水工建筑。就业于水利部门、设计院、施工单位。',
  '地质工程': '研究地质条件与工程建设。就业于地质队、设计院、矿山企业。',
  '测绘工程': '学习测量技术与地理信息采集。就业于测绘院、国土部门、建筑公司。',
  '地理信息科学': '研究GIS技术与空间数据分析。就业于测绘局、GIS公司、互联网地图企业。',
  '资源勘查工程': '学习矿产资源勘查与评价。就业于矿业公司、地质勘查院。',
  '中西医临床医学': '结合中医与西医的临床诊疗。就业于中医院、综合医院中医科。',
  '基础医学': '研究医学基础理论与实验技术。主要就业于科研院所、高校，需读博。',
  '公共卫生与预防医学': '研究疾病预防与公共卫生管理。就业于CDC、卫健委、医院预防科，疫情后需求大增。',
  '法医学': '学习法医鉴定与司法检验。就业于公安司法机关、鉴定机构，工作特殊。',
  '海洋科学': '研究海洋物理、化学、生物资源。就业于海洋局、海洋科研院所、水产养殖企业。',
  '生态学': '研究生态系统与环境保护。就业于环保组织、科研院所、自然保护区。',
  '海洋技术': '学习海洋探测与开发技术。就业于海洋工程企业、科研院所。',
  '地质学': '研究地球结构与演化。就业于地质队、矿业公司、科研院所。',
  '自然地理与资源环境': '学习自然资源评价与环境管理。就业于国土部门、环保局。',
  '海洋资源与环境': '研究海洋资源可持续利用。就业于海洋局、环保部门、水产企业。',
  '社会学': '研究社会结构与人类行为。就业于政府研究机构、社会组织、市场调研公司。',
  '哲学': '学习中外哲学理论与逻辑思维。就业于高校、研究机构、出版媒体，需深造。',
  '测绘工程': '学习工程测量与地图制作。就业于测绘院、建筑企业、国土局。',
  '行政管理': '学习政府运作与公共管理。就业于党政机关、事业单位、大型企业。',
  '地理信息科学': 'GIS技术应用与空间分析。就业于测绘局、GIS公司、互联网企业。',
  '口腔医学': '牙科疾病诊疗与口腔颌面外科。就业于口腔医院、牙科诊所，整形美容方向收入高。',
  '中医学': '学习中医理论与临床诊疗。就业于中医院、中医诊所，需考取中医执业医师。',
  '汉语国际教育': '教授外国人汉语，传播中华文化。就业于孔子学院、海外中文学校、教育机构。',
  '外交学': '学习外交理论与实务。就业于外交部、国际组织、涉外机构，需综合素质高。',
  '新闻学': '学习新闻采编与传播理论。就业于媒体、互联网内容平台、广告公司。',
  '国际政治': '研究国际关系与外交政策。就业于外交部门、国际组织、智库。',
  '历史学': '研究中外历史与史学方法。就业于高校、博物馆、出版社，需深造。',
  '政治学': '研究政治理论与制度。就业于党政机关、研究机构、国际组织。',
  '护理学': '临床护理与健康管理。就业缺口大，各级医院、社区卫生均需。',
  '旅游管理': '学习旅游企业运营与景区管理。就业于旅行社、酒店、景区管理公司。',
  '文物与博物馆学': '研究文物保护与博物馆管理。就业于博物馆、文保单位、考古机构。',
  '人文地理与城乡规划': '学习人文地理与规划设计。就业于规划院、旅游景区开发公司。',
  '地理科学': '学习自然地理与人文地理。就业于学校、测绘机构、环保组织。',
  '自然地理与资源环境': '研究自然资源与环境保护。就业于国土局、环保局。',
  '文化遗产': '学习文化遗产保护与利用。就业于文物局、博物馆、文化公司。',
  '公共事业管理': '学习公共部门管理与政策分析。就业于政府机关、事业单位、非营利组织。',
  '国际关系': '研究国家间关系与国际事务。就业于外交部、国际组织、智库、媒体。',
  '思想政治教育': '学习思想政治理论与教育方法。就业于中学、高校、党政机关。',
  '汉语言文学': '学习汉语语言与文学作品。就业广，教师、编辑、公务员均可。',
  '广播电视学': '学习广播电视节目制作与传播。就业于电视台、网络视频平台、新媒体。',
  '知识产权': '学习专利商标代理与法律保护。就业于知识产权代理机构、企业法务。',
  '考古学': '研究古代遗址与文物。就业于考古研究所、博物馆、文物鉴定机构，需深造。',
  '文物保护': '学习文物修复与保护技术。就业于博物馆、文物修复中心、文化局。',
  '资源环境与城乡规划管理': '研究资源利用与城乡规划。就业于规划设计院、国土资源部门。',
}

// 12种选科组合数据（2025年最新，含分数段对应专业+学校推荐）
const subjectCombinations = [
  {
    id: 1, name: '物化生', first: '物理', second: ['化学', '生物'], coverage: 96.4,
    direction: '理工科、医学类、药学、农学', popular: true,
    careerTips: '适合从事医生、药剂师、工程师、程序员、生物研究员、化学研究员、数据分析师、人工智能工程师等工作',
    majorsByScore: [
      { range: '680分以上', schools: ['清华大学', '北京大学', '上海交通大学', '复旦大学', '浙江大学'], majors: ['临床医学（八年制）', '口腔医学', '生物医学工程', '人工智能', '计算机科学', '基础医学'], career: '三甲医院医生、医学研究员、生物医药研发工程师、人工智能专家' },
      { range: '650-680分', schools: ['中国科学院大学', '南京大学', '中国科学技术大学', '华中科技大学', '武汉大学'], majors: ['临床医学（五年制）', '生物科学', '药学', '材料科学与工程', '机械工程', '自动化'], career: '医生、制药工程师、材料工程师、机械工程师、科研人员' },
      { range: '600-650分', schools: ['中山大学', '厦门大学', '山东大学', '四川大学', '中南大学', '重庆大学', '苏州大学', '南京医科大学'], majors: ['临床医学', '护理学', '生物技术', '化学工程与工艺', '软件工程', '电子信息工程', '光电信息科学与工程'], career: '医生、护士、软件工程师、电子工程师、化工工程师、生物技术工程师' },
      { range: '550-600分', schools: ['南方医科大学', '广州医科大学', '武汉科技大学', '湖南师范大学', '宁波大学', '浙江工业大学', '江苏大学', '扬州大学'], majors: ['医学检验技术', '康复治疗学', '生物工程', '应用化学', '食品科学与工程', '环境工程', '能源化学工程'], career: '医学检验师、康复治疗师、食品安全检测员、环境工程师、化学工程师' },
      { range: '500-550分', schools: ['河南大学', '山西大学', '华北理工大学', '安徽医科大学', '广西医科大学', '贵州医科大学', '昆明医科大学', '新疆医科大学'], majors: ['护理学', '动物医学', '农学', '园艺', '生物制药技术', '化工技术', '制药工程'], career: '护士、兽医、农艺师、制药厂技术员、宠物医生' },
      { range: '450-500分', schools: ['沈阳农业大学', '吉林农业大学', '黑龙江八一农垦大学', '甘肃农业大学', '内蒙古农业大学', '江西农业大学', '湖南农业大学', '山东农业工程学院'], majors: ['动物医学', '农学', '园艺', '植物保护', '农业资源与环境', '畜牧兽医', '宠物医疗技术'], career: '农艺师、兽医、宠物医生、农业技术员、畜牧师' },
      { range: '450分以下', schools: ['山东医学高等专科学校', '重庆医药高等专科学校', '天津医学高等专科学校', '武汉铁路职业技术学院', '南京化工职业技术学院', '浙江医药高等专科学校'], majors: ['护理（专科）', '药学（专科）', '医学检验技术（专科）', '生物技术（专科）', '化工工艺（专科）', '中药学（专科）'], career: '护士、药店药师、医学检验员、制药厂操作工、化工技术员' },
    ],
    blockedMajors: ['法学（部分院校）', '文史类专业', '纯文科专业'],
    advantage: '专业覆盖率最高96.4%，几乎可报所有理工科和医学专业，可选范围最广',
    disadvantage: '竞争激烈，高分考生多，学习难度较大',
  },
  {
    id: 2, name: '物化政', first: '物理', second: ['化学', '政治'], coverage: 99.7,
    direction: '理工科、法学、警校、公安类', popular: true,
    majorsByScore: [
      { range: '680分以上', schools: ['清华大学', '北京大学', '上海交通大学', '复旦大学', '中国人民大学'], majors: ['法学', '计算机科学与技术', '人工智能', '网络空间安全', '信息与计算科学'] },
      { range: '650-680分', schools: ['南京大学', '浙江大学', '武汉大学', '华中科技大学', '西安交通大学'], majors: ['法学', '软件工程', '网络工程', '信息安全', '通信工程'] },
      { range: '600-650分', schools: ['中国政法大学', '华东政法大学', '西南政法大学', '中南财经政法大学', '西北政法大学', '公安大学', '刑警学院'], majors: ['法学', '治安学', '侦查学', '公安管理学', '网络安全与执法'] },
      { range: '550-600分', schools: ['上海政法学院', '甘肃政法大学', '山东政法学院', '辽宁警察学院', '福建警察学院', '河南警察学院', '湖北警官学院'], majors: ['法学', '监狱学', '行政管理', '政治学与行政学', '计算机科学与技术'] },
      { range: '500-550分', schools: ['河北司法警官职业学院', '黑龙江司法警官职业学院', '江西司法警官职业学院', '湖南司法警官职业学院', '四川司法警官职业学院'], majors: ['刑事侦查', '司法警务', '法律事务', '行政执法', '社区矫正'] },
      { range: '500分以下', schools: ['北京社会管理职业学院', '武汉民政职业学院', '重庆城市管理职业学院', '长沙民政职业技术学院', '上海工艺美术职业学院'], majors: ['社区管理与服务', '社会工作', '行政管理（专科）', '计算机应用技术（专科）'] },
    ],
    blockedMajors: ['纯文史类（无理科要求）整体限制较少'],
  },
  {
    id: 3, name: '物化地', first: '物理', second: ['化学', '地理'], coverage: 95.5,
    direction: '理工科、地质地理类、城规建筑', popular: true,
    majorsByScore: [
      { range: '660分以上', schools: ['清华大学', '同济大学', '东南大学', '天津大学', '华南理工大学'], majors: ['建筑学', '城乡规划', '风景园林', '土木工程', '水利工程'] },
      { range: '620-660分', schools: ['哈尔滨工业大学', '大连理工大学', '中南大学', '湖南大学', '重庆大学', '西安建筑科技大学'], majors: ['土木工程', '地质工程', '测绘工程', '地理信息科学', '资源勘查工程'] },
      { range: '570-620分', schools: ['中国地质大学(武汉)', '成都理工大学', '长安大学', '合肥工业大学', '河海大学', '东华理工大学'], majors: ['地质学', '地球物理学', '遥感科学与技术', '环境工程', '土地资源管理'] },
      { range: '520-570分', schools: ['华北水利水电大学', '山东科技大学', '辽宁工程技术大学', '江西理工大学', '桂林理工大学', '云南财经大学'], majors: ['测绘工程', '地质工程', '矿业工程', '地理科学', '人文地理与城乡规划'] },
      { range: '470-520分', schools: ['吉林建筑大学', '内蒙古科技大学', '新疆大学', '西藏大学', '宁夏大学', '青海大学'], majors: ['建筑工程技术', '工程造价', '工程测量技术', '地质调查与矿产普查'] },
      { range: '470分以下', schools: ['黄河水利职业技术学院', '杨凌职业技术学院', '辽宁水利职业学院', '安徽水利水电职业技术学院', '江西应用技术职业学院'], majors: ['建筑工程技术', '工程测量技术', '水文与工程地质', '钻探技术', '矿山地质'] },
    ],
    blockedMajors: ['临床医学（要求生物）', '护理学（要求生物）', '法学（要求政治）'],
  },
  {
    id: 4, name: '物生政', first: '物理', second: ['生物', '政治'], coverage: 87.7,
    direction: '医学类、生命科学、警校', popular: false,
    majorsByScore: [
      { range: '660分以上', schools: ['清华大学', '北京大学', '复旦大学', '上海交通大学', '浙江大学'], majors: ['临床医学', '口腔医学', '中西医临床医学', '基础医学'] },
      { range: '610-660分', schools: ['中山大学', '华中科技大学', '武汉大学', '中南大学', '四川大学'], majors: ['临床医学', '公共卫生与预防医学', '法医学', '生物科学', '生物技术'] },
      { range: '560-610分', schools: ['南方医科大学', '重庆医科大学', '哈尔滨医科大学', '中国医科大学', '天津医科大学'], majors: ['护理学', '医学检验技术', '康复治疗学', '生物医学工程'] },
      { range: '510-560分', schools: ['广西医科大学', '贵州医科大学', '昆明医科大学', '新疆医科大学', '宁夏医科大学'], majors: ['护理学', '医学影像学', '眼视光学', '口腔医学技术'] },
      { range: '510分以下', schools: ['山东医学高等专科学校', '重庆医药高等专科学校', '天津医学高等专科学校', '泉州医学高等专科学校', '肇庆医学高等专科学校'], majors: ['护理（专科）', '助产（专科）', '健康管理（专科）', '康复治疗技术'] },
    ],
    blockedMajors: ['建筑学（要求化学）', '化工类（要求化学）'],
  },
  {
    id: 5, name: '物生地', first: '物理', second: ['生物', '地理'], coverage: 87.7,
    direction: '医学类、生物类、地理类', popular: false,
    majorsByScore: [
      { range: '640分以上', schools: ['清华大学', '北京大学', '复旦大学', '中国海洋大学', '厦门大学'], majors: ['临床医学', '海洋科学', '生态学', '基础医学', '生物科学'] },
      { range: '590-640分', schools: ['中山大学', '浙江大学', '中国科学技术大学', '南京大学', '上海海洋大学'], majors: ['海洋技术', '生物科学', '地质学', '自然地理与资源环境', '海洋资源与环境'] },
      { range: '540-590分', schools: ['中国地质大学(武汉)', '成都理工大学', '宁波大学', '海南大学', '广西大学'], majors: ['地理科学', '生物工程', '环境科学', '水产养殖学', '林学'] },
      { range: '490-540分', schools: ['吉林农业大学', '云南农业大学', '内蒙古农业大学', '甘肃农业大学', '江西农业大学'], majors: ['动植物保护', '农业资源与环境', '测绘地理信息技术', '生物技术'] },
      { range: '490分以下', schools: ['黑龙江农业工程职业学院', '吉林农业科技学院', '辽宁农业职业技术学院', '山东农业工程学院', '广西农业职业技术大学'], majors: ['农业技术（专科）', '环保技术（专科）', '养殖技术（专科）', '园林技术'] },
    ],
    blockedMajors: ['法学（要求政治）', '化工类（要求化学）'],
  },
  {
    id: 6, name: '物政地', first: '物理', second: ['政治', '地理'], coverage: 82.2,
    direction: '文理兼收、测绘、城规、法学', popular: false,
    majorsByScore: [
      { range: '640分以上', schools: ['中国人民大学', '北京大学', '清华大学', '复旦大学', '南京大学'], majors: ['法学', '政治学与行政学', '城乡规划', '社会学', '哲学'] },
      { range: '590-640分', schools: ['武汉大学', '中山大学', '厦门大学', '华东师范大学', '华中科技大学'], majors: ['社会学', '哲学', '测绘工程', '行政管理', '地理信息科学'] },
      { range: '540-590分', schools: ['中国地质大学(武汉)', '西南大学', '辽宁师范大学', '哈尔滨师范大学', '河北师范大学', '山东师范大学', '浙江师范大学'], majors: ['土地资源管理', '政治学类', '历史学', '城市管理', '人文地理与城乡规划', '测绘工程'] },
      { range: '490-540分', schools: ['吉林财经大学', '贵州财经大学', '云南财经大学', '内蒙古财经大学', '新疆财经大学', '山西财经大学', '河南财经政法大学', '兰州财经大学'], majors: ['秘书学', '社会工作', '行政管理', '公共事务管理', '人力资源管理', '土地资源管理'] },
      { range: '440-490分', schools: ['北京社会管理职业学院', '武汉民政职业学院', '重庆城市管理职业学院', '长沙民政职业技术学院', '四川管理职业学院', '南京民政职业技术学院', '山东商业职业技术学院', '河南经贸职业学院'], majors: ['社会工作', '行政管理', '社区管理与服务', '人力资源管理', '老年服务与管理'] },
      { range: '440分以下', schools: ['北京电子科技职业学院', '天津职业大学', '上海工艺美术职业学院', '武汉职业技术学院', '成都航空职业技术学院', '重庆工业职业技术学院', '南京信息职业技术学院', '苏州工艺美术职业技术学院'], majors: ['电子信息类', '计算机类', '航空服务', '数控技术', '机电一体化', '软件技术'] },
    ],
    blockedMajors: ['医学类（要求生物/化学）', '工科大部分专业（要求化学）'],
  },
  {
    id: 7, name: '史化生', first: '历史', second: ['化学', '生物'], coverage: 65.7,
    direction: '医学类、文科类、部分理工', popular: false,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '复旦大学', '上海交通大学', '浙江大学', '中山大学'], majors: ['临床医学（部分院校收历史类）', '口腔医学', '汉语言文学', '历史学', '哲学'] },
      { range: '570-620分', schools: ['南京大学', '武汉大学', '中山大学', '厦门大学', '华东师范大学'], majors: ['护理学', '药学', '生物技术', '中医学', '汉语国际教育'] },
      { range: '520-570分', schools: ['四川大学', '山东大学', '吉林大学', '苏州大学', '湖南师范大学', '辽宁师范大学', '云南大学', '广西大学'], majors: ['中药学', '医学检验技术', '历史学', '文物与博物馆学', '汉语言文学', '生物技术'] },
      { range: '470-520分', schools: ['贵州医科大学', '广西医科大学', '云南中医学院', '湖北中医药大学', '湖南中医药大学', '福建医科大学', '甘肃中医药大学', '辽宁中医药大学'], majors: ['护理学', '中药学', '医学检验技术', '康复治疗学', '药学'] },
      { range: '420-470分', schools: ['四川中医药高等专科学校', '山东中医药高等专科学校', '安徽中医药高等专科学校', '江西中医药高等专科学校', '湖北中医药高等专科学校', '湖南中医药高等专科学校', '山西药科职业学院', '黑龙江护理高等专科学校'], majors: ['护理（专科）', '中药学（专科）', '中医养生保健', '康复治疗技术', '药学（专科）'] },
      { range: '420分以下', schools: ['石家庄医学高等专科学校', '天津医学高等专科学校', '白城医学高等专科学校', '郑州黄河护理职业学院', '商丘医学高等专科学校', '安庆医药高等专科学校'], majors: ['护理（专科）', '中药学（专科）', '医学检验技术（专科）', '康复治疗技术（专科）', '药剂（专科）'] },
    ],
    blockedMajors: ['理工类大多数专业（要求物理）', '计算机类（要求物理）'],
  },
  {
    id: 8, name: '史化政', first: '历史', second: ['化学', '政治'], coverage: 66.8,
    direction: '警校、文科类、法学', popular: false,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '中国人民大学', '复旦大学', '南京大学', '武汉大学'], majors: ['法学', '外交学', '新闻学', '政治学与行政学', '国际政治'] },
      { range: '570-620分', schools: ['中国政法大学', '华东政法大学', '西南政法大学', '中南财经政法大学', '上海外国语大学'], majors: ['政治学', '法学', '新闻传播学', '历史学', '社会学'] },
      { range: '520-570分', schools: ['西北政法大学', '上海政法学院', '甘肃政法大学', '山东政法学院', '辽宁师范大学', '福建师范大学', '浙江师范大学', '哈尔滨师范大学'], majors: ['公安管理', '治安学', '行政管理', '思想政治教育', '法学', '历史学'] },
      { range: '470-520分', schools: ['河北司法警官职业学院', '黑龙江司法警官职业学院', '江西司法警官职业学院', '湖南司法警官职业学院', '四川司法警官职业学院', '辽宁警察学院', '福建警察学院', '河南警察学院', '山西警察学院'], majors: ['法律事务', '司法助理', '行政执法', '刑事侦查', '治安管理', '警察管理'] },
      { range: '420-470分', schools: ['北京政法职业学院', '上海东海职业技术学院', '武汉软件工程职业学院', '重庆信息技术职业学院', '四川科技职业学院', '北京社会管理职业学院', '武汉民政职业学院', '重庆城市管理职业学院'], majors: ['法律事务（专科）', '司法技术（专科）', '计算机应用技术', '社区管理与服务', '社会工作'] },
      { range: '420分以下', schools: ['长沙民政职业技术学院', '南京民政职业技术学院', '四川管理职业学院', '山东商业职业技术学院', '河南经贸职业学院', '安徽财贸职业学院'], majors: ['社区管理与服务', '社会工作', '行政管理（专科）', '人力资源管理', '老年服务与管理'] },
    ],
    blockedMajors: ['理工类（要求物理）', '医学类大部分（要求生物）'],
  },
  {
    id: 9, name: '史生地', first: '历史', second: ['生物', '地理'], coverage: 65.7,
    direction: '文科类、地理类、医技类、旅游酒店', popular: false,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '复旦大学', '南京大学', '浙江大学', '中山大学', '清华大学', '上海交通大学'], majors: ['历史学', '哲学', '护理学', '旅游管理', '文物与博物馆学', '人文地理与城乡规划'] },
      { range: '570-620分', schools: ['华东师范大学', '北京师范大学', '武汉大学', '厦门大学', '四川大学', '山东大学', '中南财经政法大学'], majors: ['地理科学', '自然地理与资源环境', '旅游管理', '历史学', '文化遗产', '人文地理与城乡规划'] },
      { range: '520-570分', schools: ['湖南师范大学', '辽宁师范大学', '哈尔滨师范大学', '云南大学', '贵州大学', '广西师范大学', '山东师范大学', '河北师范大学', '中国地质大学(武汉)', '成都理工大学'], majors: ['生物技术', '地理科学', '食品科学与工程', '旅游管理与服务教育', '历史学', '测绘工程', '地质学'] },
      { range: '480-520分', schools: ['江西师范大学', '贵州师范大学', '云南师范大学', '广西师范大学', '内蒙古师范大学', '河北师范大学', '山西师范大学', '河南师范大学'], majors: ['地理科学', '历史学', '生物技术', '食品科学与工程', '旅游管理', '酒店管理', '人文地理与城乡规划'] },
      { range: '440-480分', schools: ['桂林旅游学院', '四川旅游学院', '浙江旅游职业学院', '山东旅游职业学院', '海南热带海洋学院', '云南旅游职业学院', '贵州旅游职业学院', '福建旅游职业学院', '长江大学', '湖北民族大学'], majors: ['旅游管理', '酒店管理', '休闲服务与管理', '研学旅行管理与服务', '人文地理与城乡规划', '西餐工艺', '会展策划与管理'] },
      { range: '420-460分', schools: ['三亚中瑞酒店管理职业学院', '青岛酒店管理职业技术学院', '南京旅游职业学院', '浙江工贸职业技术学院', '成都银杏酒店管理学院', '郑州旅游职业学院', '黑龙江旅游职业技术学院', '吉林师范大学', '长春师范大学'], majors: ['酒店管理（专科）', '旅游服务与管理', '西餐工艺', '空中乘务', '会展策划与管理', '休闲服务与管理'] },
      { range: '420分以下', schools: ['浙江横店影视职业学院', '四川文化传媒职业学院', '湖南艺术职业学院', '湖北艺术职业学院', '广东文艺职业学院', '北京戏曲艺术职业学院', '焦作师范高等专科学校', '桂林师范高等专科学校'], majors: ['艺术类（专科）', '表演艺术', '播音与主持', '影视编导', '摄影摄像技术', '旅游服务与管理', '酒店管理与数字化运营'] },
    ],
    blockedMajors: ['法学（要求政治）', '理工类（要求物理）', '化工类（要求化学）', '机械类', '土木类', '电气类', '计算机类'],
  },
  {
    id: 10, name: '史政生', first: '历史', second: ['政治', '生物'], coverage: 66.8,
    direction: '警校、文科类、医技、护理', popular: false,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '中国人民大学', '复旦大学', '南京大学', '武汉大学', '清华大学', '上海交通大学'], majors: ['政治学与行政学', '法学', '公共事业管理', '社会学', '哲学', '国际关系', '思想政治教育'] },
      { range: '570-620分', schools: ['华东师范大学', '北京师范大学', '华中师范大学', '中山大学', '厦门大学', '四川大学', '山东大学', '中南财经政法大学'], majors: ['法学', '思想政治教育', '汉语言文学', '护理学', '行政管理', '新闻学', '广播电视学'] },
      { range: '520-570分', schools: ['西南大学', '湖南师范大学', '辽宁师范大学', '广西师范大学', '云南师范大学', '山东师范大学', '河北师范大学', '河南师范大学', '天津师范大学', '上海师范大学'], majors: ['思想政治教育', '历史学', '社会工作', '行政管理', '教育学', '法学', '护理学', '人力资源管理'] },
      { range: '480-520分', schools: ['江西师范大学', '贵州师范大学', '云南师范大学', '广西师范大学', '内蒙古师范大学', '河北师范大学', '山西师范大学', '河南师范大学', '海南师范大学', '新疆师范大学'], majors: ['小学教育', '历史学', '社会工作', '行政管理', '思想政治教育', '语文教育', '人力资源管理', '酒店管理'] },
      { range: '440-480分', schools: ['长江大学', '湖北民族大学', '吉林师范大学', '长春师范大学', '黑龙江师范大学', '贵州民族大学', '云南民族大学', '广西民族大学', '甘肃政法大学', '宁夏大学'], majors: ['社会工作', '行政管理', '思想政治教育', '法学', '人力资源管理', '酒店管理', '旅游管理', '文秘'] },
      { range: '420-460分', schools: ['河北公安警察职业学院', '辽宁警察学院', '福建警察学院', '江西警察学院', '湖南警察学院', '山西警察学院', '黑龙江司法警官职业学院', '江西司法警官职业学院', '河南警察学院', '湖北警官学院', '北京警察学院', '天津公安警官职业学院'], majors: ['治安管理', '交通管理', '网络安全与执法', '警察管理', '法律事务', '司法警务', '社区管理与服务'] },
      { range: '420分以下', schools: ['北京社会管理职业学院', '武汉民政职业学院', '重庆城市管理职业学院', '长沙民政职业技术学院', '四川管理职业学院', '南京民政职业技术学院', '重庆工业职业技术学院', '焦作师范高等专科学校', '桂林师范高等专科学校'], majors: ['社区管理与服务', '社会工作', '行政管理（专科）', '人力资源管理', '老年服务与管理', '护理（专科）', '康复治疗技术'] },
    ],
    blockedMajors: ['理工类（要求物理）', '化工类（要求化学）', '机械类', '土木类', '电气类', '计算机类'],
  },
  {
    id: 11, name: '史政地', first: '历史', second: ['政治', '地理'], coverage: 66.8,
    direction: '文科类、师范类、法学、新闻、管理', popular: true,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '复旦大学', '中国人民大学', '南京大学', '浙江大学', '上海交通大学', '清华大学'], majors: ['法学', '汉语言文学', '新闻学', '外交学', '哲学', '历史学', '国际关系', '政治学与行政学'] },
      { range: '570-620分', schools: ['武汉大学', '中山大学', '华东师范大学', '厦门大学', '华中师范大学', '四川大学', '山东大学', '中南财经政法大学'], majors: ['法学', '汉语言文学', '历史学', '国际政治', '行政管理', '新闻学', '广播电视学', '知识产权'] },
      { range: '520-570分', schools: ['湖南师范大学', '陕西师范大学', '东北师范大学', '西南大学', '福建师范大学', '山东师范大学', '辽宁师范大学', '哈尔滨师范大学', '中国政法大学', '西南政法大学'], majors: ['汉语言文学', '历史学', '地理科学', '思想政治教育', '新闻学', '英语', '法学', '社会工作', '行政管理', '文化产业管理'] },
      { range: '480-520分', schools: ['江西师范大学', '贵州师范大学', '云南师范大学', '广西师范大学', '内蒙古师范大学', '河北师范大学', '山西师范大学', '河南师范大学', '海南师范大学', '新疆师范大学', '天津师范大学', '上海师范大学'], majors: ['小学教育', '历史学', '地理科学', '社会工作', '文化产业管理', '思想政治教育', '语文教育', '法学', '人力资源管理', '酒店管理', '旅游管理', '会展经济与管理'] },
      { range: '440-480分', schools: ['长江大学', '湖北民族大学', '吉林师范大学', '长春师范大学', '黑龙江师范大学', '贵州民族大学', '云南民族大学', '广西民族大学', '甘肃政法大学', '宁夏大学', '西北师范大学', '内蒙古大学', '海南大学', '石河子大学'], majors: ['历史学', '地理科学', '思想政治教育', '社会工作', '行政管理', '法学', '酒店管理', '旅游管理', '人力资源管理', '公共事业管理', '文秘', '档案学'] },
      { range: '420-460分', schools: ['宜宾学院', '绵阳师范学院', '内江师范学院', '乐山师范学院', '四川文理学院', '安顺学院', '铜仁学院', '黔东南民族职业技术学院', '河北科技师范学院', '沧州师范学院', '衡水学院', '邢台学院'], majors: ['语文教育', '小学教育', '历史教育', '地理教育', '思想政治教育', '幼儿发展与健康管理', '老年服务与管理', '社区管理与服务', '法律事务', '文秘', '人力资源管理'] },
      { range: '420分以下', schools: ['焦作师范高等专科学校', '陇南师范高等专科学校', '桂林师范高等专科学校', '营口职业技术学院', '阳泉师范高等专科学校', '吕梁学院', '忻州师范学院', '呼伦贝尔学院', '兴义民族师范学院', '安顺学院', '济宁职业技术学院', '德州职业技术学院'], majors: ['语文教育（专科）', '小学教育（专科）', '历史教育（专科）', '幼儿教育（专科）', '地理教育（专科）', '思想政治教育（专科）', '社区管理与服务', '酒店管理与数字化运营', '旅游管理', '现代文秘', '法律事务'] },
    ],
    blockedMajors: ['理工科（要求物理）', '医学类大部分（要求生物/化学）', '信息技术类（要求物理/数学理科）', '机械类', '土木类', '电气类', '计算机类'],
  },
  {
    id: 12, name: '史化地', first: '历史', second: ['化学', '地理'], coverage: 65.7,
    direction: '文科类、地质地理类、部分医学', popular: false,
    majorsByScore: [
      { range: '620分以上', schools: ['北京大学', '复旦大学', '南京大学', '浙江大学', '中国科学技术大学'], majors: ['历史学', '考古学', '文物保护', '哲学', '人文地理与城乡规划'] },
      { range: '570-620分', schools: ['武汉大学', '中山大学', '厦门大学', '四川大学', '山东大学'], majors: ['地理科学', '历史学', '人文地理与城乡规划', '资源环境与城乡规划管理'] },
      { range: '520-570分', schools: ['中国地质大学(武汉)', '成都理工大学', '云南大学', '贵州大学', '广西大学'], majors: ['测绘工程', '地理科学', '地质学', '旅游管理', '土地资源管理'] },
      { range: '470-520分', schools: ['吉林建筑大学', '内蒙古科技大学', '新疆大学', '宁夏大学', '青海大学'], majors: ['测绘地理信息技术', '地质调查与矿产普查', '工程造价', '建筑工程技术'] },
      { range: '470分以下', schools: ['黄河水利职业技术学院', '杨凌职业技术学院', '辽宁水利职业学院', '安徽水利水电职业技术学院', '江西应用技术职业学院'], majors: ['测绘地理信息技术（专科）', '地质调查与矿产普查', '旅游服务与管理', '酒店管理'] },
    ],
    blockedMajors: ['法学（要求政治）', '理工类大多数（要求物理）'],
  },
]

// ==================== 全国高校数据库扩充（各省优质院校）====================
const expandedUniversities = [
  // ------------------- 600-650分区间（重点本科）-------------------
  { id: 206, name: '华东理工大学', province: '上海', city: '上海', rank: 45, type: '理工', score: 2025, minScore: 608, minRank: 14000, category: '本科一批' },
  { id: 207, name: '上海大学', province: '上海', city: '上海', rank: 48, type: '综合', score: 2025, minScore: 600, minRank: 16000, category: '本科一批' },
  { id: 208, name: '苏州大学', province: '江苏', city: '苏州', rank: 50, type: '综合', score: 2025, minScore: 598, minRank: 17000, category: '本科一批' },
  { id: 209, name: '南京师范大学', province: '江苏', city: '南京', rank: 52, type: '师范', score: 2025, minScore: 585, minRank: 20000, category: '本科一批' },
  { id: 210, name: '郑州大学', province: '河南', city: '郑州', rank: 55, type: '综合', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 211, name: '山东大学', province: '山东', city: '济南', rank: 22, type: '综合', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 212, name: '中国海洋大学', province: '山东', city: '青岛', rank: 42, type: '综合', score: 2025, minScore: 605, minRank: 14500, category: '本科一批' },
  { id: 213, name: '湖南大学', province: '湖南', city: '长沙', rank: 32, type: '综合', score: 2025, minScore: 612, minRank: 12500, category: '本科一批' },
  { id: 214, name: '中南大学', province: '湖南', city: '长沙', rank: 23, type: '综合', score: 2025, minScore: 618, minRank: 11000, category: '本科一批' },
  { id: 215, name: '重庆大学', province: '重庆', city: '重庆', rank: 34, type: '综合', score: 2025, minScore: 615, minRank: 11500, category: '本科一批' },
  { id: 216, name: '电子科技大学', province: '四川', city: '成都', rank: 31, type: '理工', score: 2025, minScore: 620, minRank: 10500, category: '本科一批' },
  { id: 217, name: '西南财经大学', province: '四川', city: '成都', rank: 60, type: '财经', score: 2025, minScore: 595, minRank: 18500, category: '本科一批' },
  { id: 218, name: '四川农业大学', province: '四川', city: '雅安', rank: 120, type: '农业', score: 2025, minScore: 545, minRank: 55000, category: '本科一批' },
  { id: 219, name: '云南大学', province: '云南', city: '昆明', rank: 80, type: '综合', score: 2025, minScore: 580, minRank: 22000, category: '本科一批' },
  { id: 220, name: '广西大学', province: '广西', city: '南宁', rank: 100, type: '综合', score: 2025, minScore: 560, minRank: 35000, category: '本科一批' },
  { id: 221, name: '贵州大学', province: '贵州', city: '贵阳', rank: 110, type: '综合', score: 2025, minScore: 555, minRank: 40000, category: '本科一批' },
  { id: 222, name: '海南大学', province: '海南', city: '海口', rank: 130, type: '综合', score: 2025, minScore: 550, minRank: 45000, category: '本科一批' },
  { id: 223, name: '内蒙古大学', province: '内蒙古', city: '呼和浩特', rank: 125, type: '综合', score: 2025, minScore: 535, minRank: 55000, category: '本科一批' },
  { id: 224, name: '辽宁大学', province: '辽宁', city: '沈阳', rank: 90, type: '综合', score: 2025, minScore: 585, minRank: 21000, category: '本科一批' },
  { id: 225, name: '大连海事大学', province: '辽宁', city: '大连', rank: 150, type: '理工', score: 2025, minScore: 570, minRank: 30000, category: '本科一批' },
  { id: 226, name: '东北师范大学', province: '吉林', city: '长春', rank: 75, type: '师范', score: 2025, minScore: 590, minRank: 19000, category: '本科一批' },
  { id: 227, name: '吉林大学', province: '吉林', city: '长春', rank: 27, type: '综合', score: 2025, minScore: 625, minRank: 9500, category: '本科一批' },
  { id: 228, name: '哈尔滨工程大学', province: '黑龙江', city: '哈尔滨', rank: 78, type: '理工', score: 2025, minScore: 595, minRank: 17500, category: '本科一批' },
  { id: 229, name: '东北林业大学', province: '黑龙江', city: '哈尔滨', rank: 130, type: '林业', score: 2025, minScore: 555, minRank: 42000, category: '本科一批' },
  { id: 230, name: '西北大学', province: '陕西', city: '西安', rank: 65, type: '综合', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 231, name: '西安电子科技大学', province: '陕西', city: '西安', rank: 40, type: '理工', score: 2025, minScore: 618, minRank: 10800, category: '本科一批' },
  { id: 232, name: '西北农林科技大学', province: '陕西', city: '咸阳', rank: 85, type: '农业', score: 2025, minScore: 570, minRank: 31000, category: '本科一批' },
  { id: 233, name: '长安大学', province: '陕西', city: '西安', rank: 95, type: '理工', score: 2025, minScore: 575, minRank: 28000, category: '本科一批' },
  { id: 234, name: '新疆大学', province: '新疆', city: '乌鲁木齐', rank: 140, type: '综合', score: 2025, minScore: 520, minRank: 65000, category: '本科一批' },
  { id: 235, name: '石河子大学', province: '新疆', city: '石河子', rank: 180, type: '综合', score: 2025, minScore: 505, minRank: 85000, category: '本科一批' },
  { id: 236, name: '青海大学', province: '青海', city: '西宁', rank: 200, type: '综合', score: 2025, minScore: 490, minRank: 95000, category: '本科一批' },
  { id: 237, name: '宁夏大学', province: '宁夏', city: '银川', rank: 190, type: '综合', score: 2025, minScore: 510, minRank: 80000, category: '本科一批' },
  { id: 238, name: '西藏大学', province: '西藏', city: '拉萨', rank: 220, type: '综合', score: 2025, minScore: 450, minRank: 120000, category: '本科一批' },
  { id: 239, name: '河北工业大学', province: '天津', city: '天津', rank: 100, type: '理工', score: 2025, minScore: 595, minRank: 17500, category: '本科一批' },
  { id: 240, name: '南昌大学', province: '江西', city: '南昌', rank: 72, type: '综合', score: 2025, minScore: 585, minRank: 20500, category: '本科一批' },
  { id: 241, name: '安徽大学', province: '安徽', city: '合肥', rank: 95, type: '综合', score: 2025, minScore: 580, minRank: 21500, category: '本科一批' },
  { id: 242, name: '福州大学', province: '福建', city: '福州', rank: 82, type: '综合', score: 2025, minScore: 588, minRank: 19500, category: '本科一批' },
  { id: 243, name: '厦门大学', province: '福建', city: '厦门', rank: 21, type: '综合', score: 2025, minScore: 630, minRank: 9000, category: '本科一批' },

  // ------------------- 550-600分区间（省重点本科）-------------------
  { id: 244, name: '浙江工业大学', province: '浙江', city: '杭州', rank: 85, type: '理工', score: 2025, minScore: 595, minRank: 18500, category: '本科一批' },
  { id: 245, name: '宁波大学', province: '浙江', city: '宁波', rank: 95, type: '综合', score: 2025, minScore: 590, minRank: 19500, category: '本科一批' },
  { id: 246, name: '杭州电子科技大学', province: '浙江', city: '杭州', rank: 92, type: '理工', score: 2025, minScore: 598, minRank: 17200, category: '本科一批' },
  { id: 247, name: '浙江师范大学', province: '浙江', city: '金华', rank: 105, type: '师范', score: 2025, minScore: 580, minRank: 22000, category: '本科一批' },
  { id: 248, name: '温州医科大学', province: '浙江', city: '温州', rank: 115, type: '医药', score: 2025, minScore: 610, minRank: 13000, category: '本科一批' },
  { id: 249, name: '江苏大学', province: '江苏', city: '镇江', rank: 110, type: '综合', score: 2025, minScore: 575, minRank: 28000, category: '本科一批' },
  { id: 250, name: '扬州大学', province: '江苏', city: '扬州', rank: 120, type: '综合', score: 2025, minScore: 565, minRank: 32000, category: '本科一批' },
  { id: 251, name: '南京工业大学', province: '江苏', city: '南京', rank: 100, type: '理工', score: 2025, minScore: 582, minRank: 21000, category: '本科一批' },
  { id: 252, name: '南京信息工程大学', province: '江苏', city: '南京', rank: 115, type: '理工', score: 2025, minScore: 575, minRank: 27500, category: '本科一批' },
  { id: 253, name: '南通大学', province: '江苏', city: '南通', rank: 140, type: '综合', score: 2025, minScore: 555, minRank: 38000, category: '本科一批' },
  { id: 254, name: '广东工业大学', province: '广东', city: '广州', rank: 98, type: '理工', score: 2025, minScore: 588, minRank: 19500, category: '本科一批' },
  { id: 255, name: '华南农业大学', province: '广东', city: '广州', rank: 108, type: '农业', score: 2025, minScore: 570, minRank: 30000, category: '本科一批' },
  { id: 256, name: '广州大学', province: '广东', city: '广州', rank: 125, type: '综合', score: 2025, minScore: 565, minRank: 33000, category: '本科一批' },
  { id: 257, name: '深圳大学', province: '广东', city: '深圳', rank: 87, type: '综合', score: 2025, minScore: 595, minRank: 18000, category: '本科一批' },
  { id: 258, name: '汕头大学', province: '广东', city: '汕头', rank: 150, type: '综合', score: 2025, minScore: 560, minRank: 35000, category: '本科一批' },
  { id: 259, name: '广西师范大学', province: '广西', city: '桂林', rank: 160, type: '师范', score: 2025, minScore: 530, minRank: 60000, category: '本科二批' },
  { id: 260, name: '桂林电子科技大学', province: '广西', city: '桂林', rank: 170, type: '理工', score: 2025, minScore: 535, minRank: 55000, category: '本科二批' },
  { id: 261, name: '广西医科大学', province: '广西', city: '南宁', rank: 165, type: '医药', score: 2025, minScore: 570, minRank: 31000, category: '本科一批' },
  { id: 262, name: '云南师范大学', province: '云南', city: '昆明', rank: 175, type: '师范', score: 2025, minScore: 525, minRank: 65000, category: '本科二批' },
  { id: 263, name: '昆明理工大学', province: '云南', city: '昆明', rank: 145, type: '理工', score: 2025, minScore: 555, minRank: 37000, category: '本科一批' },
  { id: 264, name: '贵州师范大学', province: '贵州', city: '贵阳', rank: 185, type: '师范', score: 2025, minScore: 510, minRank: 80000, category: '本科二批' },
  { id: 265, name: '贵州医科大学', province: '贵州', city: '贵阳', rank: 190, type: '医药', score: 2025, minScore: 545, minRank: 48000, category: '本科二批' },
  { id: 266, name: '海南师范大学', province: '海南', city: '海口', rank: 210, type: '师范', score: 2025, minScore: 490, minRank: 95000, category: '本科二批' },
  { id: 267, name: '湖南师范大学', province: '湖南', city: '长沙', rank: 88, type: '师范', score: 2025, minScore: 590, minRank: 19500, category: '本科一批' },
  { id: 268, name: '湘潭大学', province: '湖南', city: '湘潭', rank: 105, type: '综合', score: 2025, minScore: 580, minRank: 21500, category: '本科一批' },
  { id: 269, name: '长沙理工大学', province: '湖南', city: '长沙', rank: 130, type: '理工', score: 2025, minScore: 565, minRank: 33000, category: '本科一批' },
  { id: 270, name: '湖南农业大学', province: '湖南', city: '长沙', rank: 155, type: '农业', score: 2025, minScore: 535, minRank: 55000, category: '本科二批' },
  { id: 271, name: '湖北大学', province: '湖北', city: '武汉', rank: 105, type: '综合', score: 2025, minScore: 580, minRank: 21000, category: '本科一批' },
  { id: 272, name: '武汉科技大学', province: '湖北', city: '武汉', rank: 115, type: '理工', score: 2025, minScore: 575, minRank: 27000, category: '本科一批' },
  { id: 273, name: '三峡大学', province: '湖北', city: '宜昌', rank: 175, type: '综合', score: 2025, minScore: 550, minRank: 40000, category: '本科二批' },
  { id: 274, name: '长江大学', province: '湖北', city: '荆州', rank: 180, type: '综合', score: 2025, minScore: 540, minRank: 50000, category: '本科二批' },
  { id: 275, name: '河南大学', province: '河南', city: '开封', rank: 145, type: '综合', score: 2025, minScore: 565, minRank: 34000, category: '本科一批' },
  { id: 276, name: '河南师范大学', province: '河南', city: '新乡', rank: 160, type: '师范', score: 2025, minScore: 545, minRank: 45000, category: '本科二批' },
  { id: 277, name: '河南科技大学', province: '河南', city: '洛阳', rank: 155, type: '理工', score: 2025, minScore: 555, minRank: 38000, category: '本科二批' },
  { id: 278, name: '华北水利水电大学', province: '河南', city: '郑州', rank: 170, type: '理工', score: 2025, minScore: 550, minRank: 41000, category: '本科二批' },
  { id: 279, name: '河北大学', province: '河北', city: '保定', rank: 155, type: '综合', score: 2025, minScore: 555, minRank: 37000, category: '本科二批' },
  { id: 280, name: '燕山大学', province: '河北', city: '秦皇岛', rank: 135, type: '理工', score: 2025, minScore: 575, minRank: 26500, category: '本科一批' },
  { id: 281, name: '河北师范大学', province: '河北', city: '石家庄', rank: 165, type: '师范', score: 2025, minScore: 535, minRank: 52000, category: '本科二批' },
  { id: 282, name: '山西大学', province: '山西', city: '太原', rank: 145, type: '综合', score: 2025, minScore: 560, minRank: 35000, category: '本科一批' },
  { id: 283, name: '太原理工大学', province: '山西', city: '太原', rank: 150, type: '理工', score: 2025, minScore: 555, minRank: 37500, category: '本科一批' },
  { id: 284, name: '山西师范大学', province: '山西', city: '太原', rank: 180, type: '师范', score: 2025, minScore: 520, minRank: 70000, category: '本科二批' },
  { id: 285, name: '安徽师范大学', province: '安徽', city: '芜湖', rank: 155, type: '师范', score: 2025, minScore: 555, minRank: 36000, category: '本科二批' },
  { id: 286, name: '安徽理工大学', province: '安徽', city: '淮南', rank: 165, type: '理工', score: 2025, minScore: 545, minRank: 44000, category: '本科二批' },
  { id: 287, name: '安徽财经大学', province: '安徽', city: '蚌埠', rank: 175, type: '财经', score: 2025, minScore: 540, minRank: 48000, category: '本科二批' },
  { id: 288, name: '福建师范大学', province: '福建', city: '福州', rank: 140, type: '师范', score: 2025, minScore: 565, minRank: 33500, category: '本科一批' },
  { id: 289, name: '福建农林大学', province: '福建', city: '福州', rank: 160, type: '农业', score: 2025, minScore: 535, minRank: 51000, category: '本科二批' },
  { id: 290, name: '华东交通大学', province: '江西', city: '南昌', rank: 165, type: '理工', score: 2025, minScore: 550, minRank: 39000, category: '本科二批' },
  { id: 291, name: '江西师范大学', province: '江西', city: '南昌', rank: 155, type: '师范', score: 2025, minScore: 550, minRank: 39500, category: '本科二批' },
  { id: 292, name: '江西财经大学', province: '江西', city: '南昌', rank: 145, type: '财经', score: 2025, minScore: 565, minRank: 33000, category: '本科一批' },
  { id: 293, name: '山东师范大学', province: '山东', city: '济南', rank: 145, type: '师范', score: 2025, minScore: 560, minRank: 34500, category: '本科二批' },
  { id: 294, name: '山东科技大学', province: '山东', city: '青岛', rank: 140, type: '理工', score: 2025, minScore: 565, minRank: 32500, category: '本科一批' },
  { id: 295, name: '山东理工大学', province: '山东', city: '淄博', rank: 175, type: '理工', score: 2025, minScore: 535, minRank: 50000, category: '本科二批' },
  { id: 296, name: '青岛大学', province: '山东', city: '青岛', rank: 135, type: '综合', score: 2025, minScore: 570, minRank: 30500, category: '本科一批' },
  { id: 297, name: '烟台大学', province: '山东', city: '烟台', rank: 170, type: '综合', score: 2025, minScore: 545, minRank: 46000, category: '本科二批' },
  { id: 298, name: '辽宁师范大学', province: '辽宁', city: '大连', rank: 160, type: '师范', score: 2025, minScore: 545, minRank: 47000, category: '本科二批' },
  { id: 299, name: '沈阳工业大学', province: '辽宁', city: '沈阳', rank: 165, type: '理工', score: 2025, minScore: 545, minRank: 45500, category: '本科二批' },
  { id: 300, name: '沈阳建筑大学', province: '辽宁', city: '沈阳', rank: 175, type: '理工', score: 2025, minScore: 540, minRank: 49000, category: '本科二批' },

  // ------------------- 500-550分区间（普通本科）-------------------
  { id: 301, name: '内蒙古师范大学', province: '内蒙古', city: '呼和浩特', rank: 195, type: '师范', score: 2025, minScore: 490, minRank: 100000, category: '本科二批' },
  { id: 302, name: '内蒙古工业大学', province: '内蒙古', city: '呼和浩特', rank: 200, type: '理工', score: 2025, minScore: 485, minRank: 105000, category: '本科二批' },
  { id: 303, name: '内蒙古科技大学', province: '内蒙古', city: '包头', rank: 205, type: '综合', score: 2025, minScore: 480, minRank: 110000, category: '本科二批' },
  { id: 304, name: '吉林师范大学', province: '吉林', city: '四平', rank: 195, type: '师范', score: 2025, minScore: 505, minRank: 85000, category: '本科二批' },
  { id: 305, name: '长春理工大学', province: '吉林', city: '长春', rank: 175, type: '理工', score: 2025, minScore: 540, minRank: 47500, category: '本科一批' },
  { id: 306, name: '东北电力大学', province: '吉林', city: '吉林', rank: 180, type: '理工', score: 2025, minScore: 535, minRank: 53000, category: '本科二批' },
  { id: 307, name: '黑龙江大学', province: '黑龙江', city: '哈尔滨', rank: 150, type: '综合', score: 2025, minScore: 540, minRank: 48500, category: '本科二批' },
  { id: 308, name: '哈尔滨师范大学', province: '黑龙江', city: '哈尔滨', rank: 175, type: '师范', score: 2025, minScore: 520, minRank: 68000, category: '本科二批' },
  { id: 309, name: '哈尔滨商业大学', province: '黑龙江', city: '哈尔滨', rank: 195, type: '财经', score: 2025, minScore: 500, minRank: 90000, category: '本科二批' },
  { id: 310, name: '甘肃政法大学', province: '甘肃', city: '兰州', rank: 210, type: '政法', score: 2025, minScore: 510, minRank: 82000, category: '本科二批' },
  { id: 311, name: '甘肃农业大学', province: '甘肃', city: '兰州', rank: 205, type: '农业', score: 2025, minScore: 490, minRank: 102000, category: '本科二批' },
  { id: 312, name: '兰州交通大学', province: '甘肃', city: '兰州', rank: 195, type: '理工', score: 2025, minScore: 510, minRank: 84000, category: '本科二批' },
  { id: 313, name: '兰州理工大学', province: '甘肃', city: '兰州', rank: 190, type: '理工', score: 2025, minScore: 515, minRank: 78000, category: '本科二批' },
  { id: 314, name: '西北师范大学', province: '甘肃', city: '兰州', rank: 180, type: '师范', score: 2025, minScore: 530, minRank: 60000, category: '本科二批' },
  { id: 315, name: '青海师范大学', province: '青海', city: '西宁', rank: 215, type: '师范', score: 2025, minScore: 470, minRank: 115000, category: '本科二批' },
  { id: 316, name: '青海民族大学', province: '青海', city: '西宁', rank: 220, type: '民族', score: 2025, minScore: 465, minRank: 118000, category: '本科二批' },
  { id: 317, name: '宁夏医科大学', province: '宁夏', city: '银川', rank: 200, type: '医药', score: 2025, minScore: 510, minRank: 83000, category: '本科二批' },
  { id: 318, name: '北方民族大学', province: '宁夏', city: '银川', rank: 215, type: '民族', score: 2025, minScore: 475, minRank: 112000, category: '本科二批' },
  { id: 319, name: '新疆医科大学', province: '新疆', city: '乌鲁木齐', rank: 195, type: '医药', score: 2025, minScore: 520, minRank: 69000, category: '本科二批' },
  { id: 320, name: '新疆师范大学', province: '新疆', city: '乌鲁木齐', rank: 210, type: '师范', score: 2025, minScore: 485, minRank: 106000, category: '本科二批' },
  { id: 321, name: '喀什大学', province: '新疆', city: '喀什', rank: 230, type: '师范', score: 2025, minScore: 440, minRank: 130000, category: '本科二批' },
  { id: 322, name: '西藏民族大学', province: '陕西', city: '咸阳', rank: 225, type: '民族', score: 2025, minScore: 455, minRank: 125000, category: '本科二批' },
  { id: 323, name: '四川师范大学', province: '四川', city: '成都', rank: 155, type: '师范', score: 2025, minScore: 555, minRank: 36000, category: '本科二批' },
  { id: 324, name: '西华大学', province: '四川', city: '成都', rank: 170, type: '综合', score: 2025, minScore: 545, minRank: 44000, category: '本科二批' },
  { id: 325, name: '成都理工大学', province: '四川', city: '成都', rank: 145, type: '理工', score: 2025, minScore: 565, minRank: 32500, category: '本科一批' },
  { id: 326, name: '西南科技大学', province: '四川', city: '绵阳', rank: 180, type: '理工', score: 2025, minScore: 535, minRank: 52000, category: '本科二批' },
  { id: 327, name: '西华师范大学', province: '四川', city: '南充', rank: 190, type: '师范', score: 2025, minScore: 520, minRank: 67000, category: '本科二批' },
  { id: 328, name: '重庆师范大学', province: '重庆', city: '重庆', rank: 175, type: '师范', score: 2025, minScore: 545, minRank: 45000, category: '本科二批' },
  { id: 329, name: '重庆交通大学', province: '重庆', city: '重庆', rank: 180, type: '理工', score: 2025, minScore: 540, minRank: 49000, category: '本科二批' },
  { id: 330, name: '重庆理工大学', province: '重庆', city: '重庆', rank: 185, type: '理工', score: 2025, minScore: 535, minRank: 53000, category: '本科二批' },
  { id: 331, name: '贵州民族大学', province: '贵州', city: '贵阳', rank: 200, type: '民族', score: 2025, minScore: 495, minRank: 98000, category: '本科二批' },
  { id: 332, name: '遵义医科大学', province: '贵州', city: '遵义', rank: 195, type: '医药', score: 2025, minScore: 530, minRank: 59000, category: '本科二批' },
  { id: 333, name: '云南民族大学', province: '云南', city: '昆明', rank: 200, type: '民族', score: 2025, minScore: 505, minRank: 87000, category: '本科二批' },
  { id: 334, name: '大理大学', province: '云南', city: '大理', rank: 215, type: '综合', score: 2025, minScore: 485, minRank: 108000, category: '本科二批' },
  { id: 335, name: '广西民族大学', province: '广西', city: '南宁', rank: 195, type: '民族', score: 2025, minScore: 505, minRank: 86000, category: '本科二批' },
  { id: 336, name: '桂林理工大学', province: '广西', city: '桂林', rank: 185, type: '理工', score: 2025, minScore: 515, minRank: 75000, category: '本科二批' },
  { id: 337, name: '右江民族医学院', province: '广西', city: '百色', rank: 210, type: '医药', score: 2025, minScore: 490, minRank: 103000, category: '本科二批' },
  { id: 338, name: '海南医学院', province: '海南', city: '海口', rank: 215, type: '医药', score: 2025, minScore: 505, minRank: 89000, category: '本科二批' },
  { id: 339, name: '广东财经大学', province: '广东', city: '广州', rank: 160, type: '财经', score: 2025, minScore: 555, minRank: 35000, category: '本科二批' },
  { id: 340, name: '广东海洋大学', province: '广东', city: '湛江', rank: 180, type: '农业', score: 2025, minScore: 530, minRank: 60000, category: '本科二批' },
  { id: 341, name: '仲恺农业技术学院', province: '广东', city: '广州', rank: 200, type: '农业', score: 2025, minScore: 505, minRank: 90000, category: '本科二批' },
  { id: 342, name: '韶关学院', province: '广东', city: '韶关', rank: 210, type: '综合', score: 2025, minScore: 490, minRank: 101000, category: '本科二批' },
  { id: 343, name: '惠州学院', province: '广东', city: '惠州', rank: 205, type: '综合', score: 2025, minScore: 500, minRank: 95000, category: '本科二批' },
  { id: 344, name: '岭南师范学院', province: '广东', city: '湛江', rank: 215, type: '师范', score: 2025, minScore: 485, minRank: 107000, category: '本科二批' },
  { id: 345, name: '湖南科技大学', province: '湖南', city: '湘潭', rank: 170, type: '综合', score: 2025, minScore: 545, minRank: 43500, category: '本科二批' },
  { id: 346, name: '湖南商学院', province: '湖南', city: '长沙', rank: 185, type: '财经', score: 2025, minScore: 535, minRank: 51000, category: '本科二批' },
  { id: 347, name: '中南林业科技大学', province: '湖南', city: '长沙', rank: 165, type: '林业', score: 2025, minScore: 545, minRank: 42500, category: '本科二批' },
  { id: 348, name: '湖南中医药大学', province: '湖南', city: '长沙', rank: 175, type: '医药', score: 2025, minScore: 555, minRank: 35500, category: '本科一批' },
  { id: 349, name: '湖北中医药大学', province: '湖北', city: '武汉', rank: 180, type: '医药', score: 2025, minScore: 550, minRank: 38500, category: '本科二批' },
  { id: 350, name: '武汉工程大学', province: '湖北', city: '武汉', rank: 175, type: '理工', score: 2025, minScore: 545, minRank: 44500, category: '本科二批' },
  { id: 351, name: '武汉纺织大学', province: '湖北', city: '武汉', rank: 185, type: '理工', score: 2025, minScore: 530, minRank: 59000, category: '本科二批' },
  { id: 352, name: '湖北工业大学', province: '湖北', city: '武汉', rank: 180, type: '理工', score: 2025, minScore: 540, minRank: 50000, category: '本科二批' },
  { id: 353, name: '河南工业大学', province: '河南', city: '郑州', rank: 170, type: '理工', score: 2025, minScore: 545, minRank: 43000, category: '本科二批' },
  { id: 354, name: '河南农业大学', province: '河南', city: '郑州', rank: 180, type: '农业', score: 2025, minScore: 525, minRank: 64000, category: '本科二批' },
  { id: 355, name: '河南中医药大学', province: '河南', city: '郑州', rank: 185, type: '医药', score: 2025, minScore: 540, minRank: 49000, category: '本科二批' },
  { id: 356, name: '新乡医学院', province: '河南', city: '新乡', rank: 190, type: '医药', score: 2025, minScore: 535, minRank: 54000, category: '本科二批' },
  { id: 357, name: '河北医科大学', province: '河北', city: '石家庄', rank: 150, type: '医药', score: 2025, minScore: 575, minRank: 27000, category: '本科一批' },
  { id: 358, name: '河北师范大学', province: '河北', city: '石家庄', rank: 165, type: '师范', score: 2025, minScore: 535, minRank: 52000, category: '本科二批' },
  { id: 359, name: '河北科技大学', province: '河北', city: '石家庄', rank: 175, type: '理工', score: 2025, minScore: 530, minRank: 58000, category: '本科二批' },
  { id: 360, name: '华北理工大学', province: '河北', city: '唐山', rank: 165, type: '综合', score: 2025, minScore: 545, minRank: 44000, category: '本科二批' },
  { id: 361, name: '石家庄铁道大学', province: '河北', city: '石家庄', rank: 170, type: '理工', score: 2025, minScore: 550, minRank: 39500, category: '本科二批' },
  { id: 362, name: '山西医科大学', province: '山西', city: '太原', rank: 170, type: '医药', score: 2025, minScore: 555, minRank: 36500, category: '本科一批' },
  { id: 363, name: '中北大学', province: '山西', city: '太原', rank: 175, type: '理工', score: 2025, minScore: 540, minRank: 49000, category: '本科二批' },
  { id: 364, name: '山西财经大学', province: '山西', city: '太原', rank: 180, type: '财经', score: 2025, minScore: 530, minRank: 59000, category: '本科二批' },
  { id: 365, name: '安徽医科大学', province: '安徽', city: '合肥', rank: 160, type: '医药', score: 2025, minScore: 575, minRank: 28000, category: '本科一批' },
  { id: 366, name: '安徽工业大学', province: '安徽', city: '马鞍山', rank: 180, type: '理工', score: 2025, minScore: 535, minRank: 53000, category: '本科二批' },
  { id: 367, name: '安徽建筑大学', province: '安徽', city: '合肥', rank: 185, type: '理工', score: 2025, minScore: 530, minRank: 57000, category: '本科二批' },
  { id: 368, name: '福建医科大学', province: '福建', city: '福州', rank: 160, type: '医药', score: 2025, minScore: 570, minRank: 30500, category: '本科一批' },
  { id: 369, name: '福建中医药大学', province: '福建', city: '福州', rank: 180, type: '医药', score: 2025, minScore: 545, minRank: 44500, category: '本科二批' },
  { id: 370, name: '集美大学', province: '福建', city: '厦门', rank: 175, type: '综合', score: 2025, minScore: 545, minRank: 43500, category: '本科二批' },
  { id: 371, name: '江西理工大学', province: '江西', city: '赣州', rank: 180, type: '理工', score: 2025, minScore: 535, minRank: 52000, category: '本科二批' },
  { id: 372, name: '东华理工大学', province: '江西', city: '南昌', rank: 185, type: '理工', score: 2025, minScore: 530, minRank: 57000, category: '本科二批' },
  { id: 373, name: '江西中医药大学', province: '江西', city: '南昌', rank: 190, type: '医药', score: 2025, minScore: 525, minRank: 63000, category: '本科二批' },
  { id: 374, name: '济南大学', province: '山东', city: '济南', rank: 170, type: '综合', score: 2025, minScore: 545, minRank: 42500, category: '本科二批' },
  { id: 375, name: '山东第一医科大学', province: '山东', city: '济南', rank: 175, type: '医药', score: 2025, minScore: 550, minRank: 38000, category: '本科二批' },
  { id: 376, name: '山东中医药大学', province: '山东', city: '济南', rank: 180, type: '医药', score: 2025, minScore: 545, minRank: 44500, category: '本科二批' },
  { id: 377, name: '滨州医学院', province: '山东', city: '滨州', rank: 190, type: '医药', score: 2025, minScore: 530, minRank: 59000, category: '本科二批' },
  { id: 378, name: '临沂大学', province: '山东', city: '临沂', rank: 195, type: '综合', score: 2025, minScore: 510, minRank: 82000, category: '本科二批' },
  { id: 379, name: '鲁东大学', province: '山东', city: '烟台', rank: 195, type: '综合', score: 2025, minScore: 515, minRank: 78000, category: '本科二批' },
  { id: 380, name: '辽宁工程技术大学', province: '辽宁', city: '阜新', rank: 175, type: '理工', score: 2025, minScore: 535, minRank: 51000, category: '本科二批' },
  { id: 381, name: '辽宁科技大学', province: '辽宁', city: '鞍山', rank: 185, type: '理工', score: 2025, minScore: 525, minRank: 64000, category: '本科二批' },
  { id: 382, name: '沈阳化工大学', province: '辽宁', city: '沈阳', rank: 190, type: '理工', score: 2025, minScore: 520, minRank: 68000, category: '本科二批' },
  { id: 383, name: '大连工业大学', province: '辽宁', city: '大连', rank: 180, type: '理工', score: 2025, minScore: 530, minRank: 59000, category: '本科二批' },
  { id: 384, name: '大连海洋大学', province: '辽宁', city: '大连', rank: 195, type: '农业', score: 2025, minScore: 510, minRank: 82000, category: '本科二批' },
  { id: 385, name: '沈阳医学院', province: '辽宁', city: '沈阳', rank: 195, type: '医药', score: 2025, minScore: 525, minRank: 65000, category: '本科二批' },
  { id: 386, name: '吉林财经大学', province: '吉林', city: '长春', rank: 185, type: '财经', score: 2025, minScore: 530, minRank: 58000, category: '本科二批' },
  { id: 387, name: '吉林建筑大学', province: '吉林', city: '长春', rank: 195, type: '理工', score: 2025, minScore: 510, minRank: 83000, category: '本科二批' },
  { id: 388, name: '长春中医药大学', province: '吉林', city: '长春', rank: 190, type: '医药', score: 2025, minScore: 525, minRank: 63000, category: '本科二批' },
  { id: 389, name: '北华大学', province: '吉林', city: '吉林', rank: 200, type: '综合', score: 2025, minScore: 500, minRank: 90000, category: '本科二批' },
  { id: 390, name: '延边大学', province: '吉林', city: '延边', rank: 180, type: '综合', score: 2025, minScore: 535, minRank: 53000, category: '本科一批' },

  // ------------------- 各省专科学校扩充 -------------------
  // 河北省专科
  { id: 391, name: '石家庄职业技术学院', province: '河北', city: '石家庄', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 392, name: '邢台职业技术学院', province: '河北', city: '邢台', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 393, name: '邯郸职业技术学院', province: '河北', city: '邯郸', rank: 290, type: '综合', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 394, name: '唐山工业职业技术学院', province: '河北', city: '唐山', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 395, name: '河北科技工程职业技术大学', province: '河北', city: '邢台', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 396, name: '保定职业技术学院', province: '河北', city: '保定', rank: 295, type: '综合', score: 2025, minScore: 295, minRank: 195000, category: '专科' },
  { id: 397, name: '河北化工医药职业技术学院', province: '河北', city: '石家庄', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 398, name: '秦皇岛职业技术学院', province: '河北', city: '秦皇岛', rank: 300, type: '综合', score: 2025, minScore: 285, minRank: 200000, category: '专科' },
  { id: 399, name: '沧州医学高等专科学校', province: '河北', city: '沧州', rank: 260, type: '医药', score: 2025, minScore: 360, minRank: 160000, category: '专科' },
  { id: 400, name: '承德石油高等专科学校', province: '河北', city: '承德', rank: 268, type: '理工', score: 2025, minScore: 345, minRank: 168000, category: '专科' },

  // 山西省专科
  { id: 401, name: '山西工程职业学院', province: '山西', city: '太原', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 402, name: '山西交通职业技术学院', province: '山西', city: '太原', rank: 285, type: '理工', score: 2025, minScore: 315, minRank: 182000, category: '专科' },
  { id: 403, name: '山西机电职业技术学院', province: '山西', city: '长治', rank: 290, type: '理工', score: 2025, minScore: 305, minRank: 188000, category: '专科' },
  { id: 404, name: '晋城职业技术学院', province: '山西', city: '晋城', rank: 300, type: '综合', score: 2025, minScore: 280, minRank: 198000, category: '专科' },
  { id: 405, name: '山西建筑职业技术学院', province: '山西', city: '太原', rank: 278, type: '理工', score: 2025, minScore: 325, minRank: 176000, category: '专科' },
  { id: 406, name: '山西能源学院', province: '山西', city: '太原', rank: 282, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 407, name: '临汾职业技术学院', province: '山西', city: '临汾', rank: 295, type: '综合', score: 2025, minScore: 290, minRank: 193000, category: '专科' },
  { id: 408, name: '运城幼儿师范高等专科学校', province: '山西', city: '运城', rank: 270, type: '师范', score: 2025, minScore: 340, minRank: 170000, category: '专科' },

  // 内蒙古专科
  { id: 409, name: '包头职业技术学院', province: '内蒙古', city: '包头', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 410, name: '内蒙古机电职业技术学院', province: '内蒙古', city: '呼和浩特', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 411, name: '内蒙古建筑职业技术学院', province: '内蒙古', city: '呼和浩特', rank: 290, type: '理工', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 412, name: '呼和浩特职业学院', province: '内蒙古', city: '呼和浩特', rank: 295, type: '综合', score: 2025, minScore: 290, minRank: 195000, category: '专科' },
  { id: 413, name: '包头轻工职业技术学院', province: '内蒙古', city: '包头', rank: 300, type: '理工', score: 2025, minScore: 280, minRank: 200000, category: '专科' },
  { id: 414, name: '赤峰职业技术学院', province: '内蒙古', city: '赤峰', rank: 305, type: '综合', score: 2025, minScore: 270, minRank: 205000, category: '专科' },

  // 黑龙江省专科
  { id: 415, name: '哈尔滨职业技术学院', province: '黑龙江', city: '哈尔滨', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 416, name: '黑龙江职业学院', province: '黑龙江', city: '哈尔滨', rank: 275, type: '综合', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 417, name: '黑龙江农业工程职业学院', province: '黑龙江', city: '哈尔滨', rank: 280, type: '农业', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 418, name: '哈尔滨铁道职业技术学院', province: '黑龙江', city: '哈尔滨', rank: 278, type: '理工', score: 2025, minScore: 325, minRank: 178000, category: '专科' },
  { id: 419, name: '黑龙江建筑职业技术学院', province: '黑龙江', city: '哈尔滨', rank: 282, type: '理工', score: 2025, minScore: 315, minRank: 182000, category: '专科' },
  { id: 420, name: '大庆职业学院', province: '黑龙江', city: '大庆', rank: 290, type: '理工', score: 2025, minScore: 305, minRank: 190000, category: '专科' },
  { id: 421, name: '黑龙江司法警官职业学院', province: '黑龙江', city: '哈尔滨', rank: 285, type: '政法', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 422, name: '黑龙江艺术职业学院', province: '黑龙江', city: '哈尔滨', rank: 300, type: '艺术', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 辽宁省专科
  { id: 423, name: '辽宁省交通高等专科学校', province: '辽宁', city: '沈阳', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },
  { id: 424, name: '沈阳职业技术学院', province: '辽宁', city: '沈阳', rank: 265, type: '综合', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 425, name: '辽宁机电职业技术学院', province: '辽宁', city: '丹东', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 426, name: '辽宁石化职业技术学院', province: '辽宁', city: '锦州', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 427, name: '大连职业技术学院', province: '辽宁', city: '大连', rank: 260, type: '综合', score: 2025, minScore: 360, minRank: 160000, category: '专科' },
  { id: 428, name: '辽宁农业职业技术学院', province: '辽宁', city: '营口', rank: 285, type: '农业', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 429, name: '辽宁建筑职业学院', province: '辽宁', city: '沈阳', rank: 278, type: '理工', score: 2025, minScore: 325, minRank: 178000, category: '专科' },
  { id: 430, name: '渤海船舶职业学院', province: '辽宁', city: '葫芦岛', rank: 290, type: '理工', score: 2025, minScore: 300, minRank: 190000, category: '专科' },

  // 吉林省专科
  { id: 431, name: '长春职业技术学院', province: '吉林', city: '长春', rank: 265, type: '综合', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 432, name: '吉林工业职业技术学院', province: '吉林', city: '吉林', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 433, name: '长春汽车工业高等专科学校', province: '吉林', city: '长春', rank: 258, type: '理工', score: 2025, minScore: 370, minRank: 158000, category: '专科' },
  { id: 434, name: '吉林电子信息职业技术学院', province: '吉林', city: '吉林', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 435, name: '四平职业大学', province: '吉林', city: '四平', rank: 295, type: '综合', score: 2025, minScore: 290, minRank: 195000, category: '专科' },
  { id: 436, name: '辽源职业技术学院', province: '吉林', city: '辽源', rank: 300, type: '理工', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 天津市专科
  { id: 437, name: '天津职业大学', province: '天津', city: '天津', rank: 250, type: '综合', score: 2025, minScore: 390, minRank: 150000, category: '专科' },
  { id: 438, name: '天津中德应用技术大学', province: '天津', city: '天津', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },
  { id: 439, name: '天津医学高等专科学校', province: '天津', city: '天津', rank: 248, type: '医药', score: 2025, minScore: 400, minRank: 148000, category: '专科' },
  { id: 440, name: '天津电子信息职业技术学院', province: '天津', city: '天津', rank: 260, type: '理工', score: 2025, minScore: 365, minRank: 160000, category: '专科' },
  { id: 441, name: '天津现代职业技术学院', province: '天津', city: '天津', rank: 270, type: '综合', score: 2025, minScore: 340, minRank: 170000, category: '专科' },

  // 陕西省专科
  { id: 442, name: '陕西工业职业技术学院', province: '陕西', city: '咸阳', rank: 260, type: '理工', score: 2025, minScore: 365, minRank: 160000, category: '专科' },
  { id: 443, name: '杨凌职业技术学院', province: '陕西', city: '咸阳', rank: 268, type: '农业', score: 2025, minScore: 345, minRank: 168000, category: '专科' },
  { id: 444, name: '西安航空职业技术学院', province: '陕西', city: '西安', rank: 265, type: '理工', score: 2025, minScore: 355, minRank: 165000, category: '专科' },
  { id: 445, name: '陕西铁路工程职业技术学院', province: '陕西', city: '渭南', rank: 262, type: '理工', score: 2025, minScore: 360, minRank: 162000, category: '专科' },
  { id: 446, name: '西安铁路职业技术学院', province: '陕西', city: '西安', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 447, name: '陕西国防工业职业技术学院', province: '陕西', city: '西安', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 448, name: '陕西财经职业技术学院', province: '陕西', city: '咸阳', rank: 280, type: '财经', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 449, name: '陕西警官职业学院', province: '陕西', city: '西安', rank: 285, type: '政法', score: 2025, minScore: 310, minRank: 185000, category: '专科' },

  // 甘肃省专科
  { id: 450, name: '兰州石化职业技术学院', province: '甘肃', city: '兰州', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 451, name: '兰州资源环境职业技术大学', province: '甘肃', city: '兰州', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 452, name: '甘肃建筑职业技术学院', province: '甘肃', city: '兰州', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 453, name: '甘肃林业职业技术学院', province: '甘肃', city: '天水', rank: 290, type: '林业', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 454, name: '甘肃农业职业技术学院', province: '甘肃', city: '兰州', rank: 295, type: '农业', score: 2025, minScore: 290, minRank: 195000, category: '专科' },
  { id: 455, name: '兰州职业技术学院', province: '甘肃', city: '兰州', rank: 298, type: '综合', score: 2025, minScore: 285, minRank: 198000, category: '专科' },

  // 青海省专科
  { id: 456, name: '青海交通职业技术学院', province: '青海', city: '西宁', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 457, name: '青海建筑职业技术学院', province: '青海', city: '西宁', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 458, name: '青海卫生职业技术学院', province: '青海', city: '西宁', rank: 290, type: '医药', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 459, name: '青海畜牧兽医职业技术学院', province: '青海', city: '西宁', rank: 300, type: '农业', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 宁夏专科
  { id: 460, name: '宁夏职业技术学院', province: '宁夏', city: '银川', rank: 280, type: '综合', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 461, name: '宁夏工商职业技术学院', province: '宁夏', city: '银川', rank: 285, type: '财经', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 462, name: '宁夏建设职业技术学院', province: '宁夏', city: '银川', rank: 290, type: '理工', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 463, name: '宁夏民族职业技术学院', province: '宁夏', city: '吴忠', rank: 300, type: '综合', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 新疆专科
  { id: 464, name: '新疆农业职业技术学院', province: '新疆', city: '昌吉', rank: 275, type: '农业', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 465, name: '新疆铁道职业技术学院', province: '新疆', city: '乌鲁木齐', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 466, name: '新疆建设职业技术学院', province: '新疆', city: '乌鲁木齐', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 467, name: '新疆机电职业技术学院', province: '新疆', city: '乌鲁木齐', rank: 290, type: '理工', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 468, name: '新疆轻工职业技术学院', province: '新疆', city: '乌鲁木齐', rank: 295, type: '理工', score: 2025, minScore: 290, minRank: 195000, category: '专科' },

  // 西藏专科
  { id: 469, name: '西藏职业技术学院', province: '西藏', city: '拉萨', rank: 295, type: '综合', score: 2025, minScore: 290, minRank: 195000, category: '专科' },
  { id: 470, name: '西藏民族大学', province: '西藏', city: '咸阳', rank: 200, type: '综合', score: 2025, minScore: 450, minRank: 120000, category: '本科一批' },
  { id: 471, name: '拉萨师范高等专科学校', province: '西藏', city: '拉萨', rank: 300, type: '师范', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 云南省专科
  { id: 472, name: '云南交通职业技术学院', province: '云南', city: '昆明', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 473, name: '昆明冶金高等专科学校', province: '云南', city: '昆明', rank: 255, type: '理工', score: 2025, minScore: 370, minRank: 155000, category: '专科' },
  { id: 474, name: '云南机电职业技术学院', province: '云南', city: '昆明', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 475, name: '云南能源职业技术学院', province: '云南', city: '曲靖', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 476, name: '云南国防工业职业技术学院', province: '云南', city: '昆明', rank: 288, type: '理工', score: 2025, minScore: 305, minRank: 188000, category: '专科' },

  // 贵州省专科
  { id: 477, name: '贵州交通职业技术学院', province: '贵州', city: '贵阳', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 478, name: '贵州工业职业技术学院', province: '贵州', city: '贵阳', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 479, name: '贵州建设职业技术学院', province: '贵州', city: '贵阳', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 480, name: '贵州轻工职业技术学院', province: '贵州', city: '贵阳', rank: 290, type: '理工', score: 2025, minScore: 300, minRank: 190000, category: '专科' },
  { id: 481, name: '贵州电子信息职业技术学院', province: '贵州', city: '凯里', rank: 295, type: '理工', score: 2025, minScore: 290, minRank: 195000, category: '专科' },

  // 广西专科
  { id: 482, name: '广西交通职业技术学院', province: '广西', city: '南宁', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 483, name: '广西电力职业技术学院', province: '广西', city: '南宁', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 484, name: '广西工业职业技术学院', province: '广西', city: '南宁', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 485, name: '广西建设职业技术学院', province: '广西', city: '南宁', rank: 288, type: '理工', score: 2025, minScore: 305, minRank: 188000, category: '专科' },
  { id: 486, name: '广西机电职业技术学院', province: '广西', city: '南宁', rank: 292, type: '理工', score: 2025, minScore: 295, minRank: 192000, category: '专科' },

  // 海南省专科
  { id: 487, name: '海南职业技术学院', province: '海南', city: '海口', rank: 280, type: '综合', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 488, name: '海南经贸职业技术学院', province: '海南', city: '海口', rank: 285, type: '财经', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 489, name: '海南科技职业大学', province: '海南', city: '海口', rank: 278, type: '理工', score: 2025, minScore: 325, minRank: 178000, category: '专科' },
  { id: 490, name: '三亚城市职业学院', province: '海南', city: '三亚', rank: 300, type: '综合', score: 2025, minScore: 280, minRank: 200000, category: '专科' },

  // 江西省专科
  { id: 491, name: '江西应用技术职业学院', province: '江西', city: '赣州', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 492, name: '江西交通职业技术学院', province: '江西', city: '南昌', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 493, name: '江西电力职业技术学院', province: '江西', city: '南昌', rank: 278, type: '理工', score: 2025, minScore: 325, minRank: 178000, category: '专科' },
  { id: 494, name: '江西冶金职业技术学院', province: '江西', city: '新余', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 495, name: '江西现代职业技术学院', province: '江西', city: '南昌', rank: 280, type: '理工', score: 2025, minScore: 320, minRank: 180000, category: '专科' },

  // 安徽省专科
  { id: 496, name: '安徽水利水电职业技术学院', province: '安徽', city: '合肥', rank: 260, type: '理工', score: 2025, minScore: 365, minRank: 160000, category: '专科' },
  { id: 497, name: '安徽机电职业技术学院', province: '安徽', city: '芜湖', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 498, name: '安徽电气工程职业技术学院', province: '安徽', city: '合肥', rank: 275, type: '理工', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 499, name: '安徽化工职业技术学院', province: '安徽', city: '合肥', rank: 285, type: '理工', score: 2025, minScore: 310, minRank: 185000, category: '专科' },
  { id: 500, name: '芜湖职业技术学院', province: '安徽', city: '芜湖', rank: 265, type: '综合', score: 2025, minScore: 350, minRank: 165000, category: '专科' },

  // 福建省专科
  { id: 501, name: '福建船政交通职业学院', province: '福建', city: '福州', rank: 260, type: '理工', score: 2025, minScore: 365, minRank: 160000, category: '专科' },
  { id: 502, name: '福建信息职业技术学院', province: '福建', city: '福州', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 503, name: '福建卫生职业技术学院', province: '福建', city: '福州', rank: 275, type: '医药', score: 2025, minScore: 330, minRank: 175000, category: '专科' },
  { id: 504, name: '泉州医学高等专科学校', province: '福建', city: '泉州', rank: 268, type: '医药', score: 2025, minScore: 345, minRank: 168000, category: '专科' },
  { id: 505, name: '厦门海洋职业技术学院', province: '福建', city: '厦门', rank: 272, type: '理工', score: 2025, minScore: 335, minRank: 172000, category: '专科' },

  // 山东省专科
  { id: 506, name: '山东商业职业技术学院', province: '山东', city: '济南', rank: 250, type: '财经', score: 2025, minScore: 390, minRank: 150000, category: '专科' },
  { id: 507, name: '山东工业职业技术学院', province: '山东', city: '淄博', rank: 260, type: '理工', score: 2025, minScore: 365, minRank: 160000, category: '专科' },
  { id: 508, name: '山东职业学院', province: '山东', city: '济南', rank: 265, type: '理工', score: 2025, minScore: 350, minRank: 165000, category: '专科' },
  { id: 509, name: '烟台职业学院', province: '山东', city: '烟台', rank: 270, type: '综合', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 510, name: '青岛职业学院', province: '山东', city: '青岛', rank: 268, type: '综合', score: 2025, minScore: 345, minRank: 168000, category: '专科' },
  { id: 511, name: '山东畜牧兽医职业学院', province: '山东', city: '潍坊', rank: 280, type: '农业', score: 2025, minScore: 320, minRank: 180000, category: '专科' },
  { id: 512, name: '山东电力高等专科学校', province: '山东', city: '济南', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },

  // 江苏省专科
  { id: 513, name: '南京信息职业技术学院', province: '江苏', city: '南京', rank: 250, type: '理工', score: 2025, minScore: 390, minRank: 150000, category: '专科' },
  { id: 514, name: '江苏建筑职业技术学院', province: '江苏', city: '徐州', rank: 258, type: '理工', score: 2025, minScore: 375, minRank: 158000, category: '专科' },
  { id: 515, name: '常州机电职业技术学院', province: '江苏', city: '常州', rank: 265, type: '理工', score: 2025, minScore: 355, minRank: 165000, category: '专科' },
  { id: 516, name: '江苏海事职业技术学院', province: '江苏', city: '南京', rank: 270, type: '理工', score: 2025, minScore: 340, minRank: 170000, category: '专科' },
  { id: 517, name: '苏州工业职业技术学院', province: '江苏', city: '苏州', rank: 268, type: '理工', score: 2025, minScore: 345, minRank: 168000, category: '专科' },
  { id: 518, name: '无锡职业技术学院', province: '江苏', city: '无锡', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },

  // 浙江省专科
  { id: 519, name: '浙江机电职业技术学院', province: '浙江', city: '杭州', rank: 250, type: '理工', score: 2025, minScore: 395, minRank: 150000, category: '专科' },
  { id: 520, name: '浙江交通职业技术学院', province: '浙江', city: '杭州', rank: 260, type: '理工', score: 2025, minScore: 370, minRank: 160000, category: '专科' },
  { id: 521, name: '浙江工贸职业技术学院', province: '浙江', city: '温州', rank: 270, type: '综合', score: 2025, minScore: 345, minRank: 170000, category: '专科' },
  { id: 522, name: '杭州职业技术学院', province: '浙江', city: '杭州', rank: 265, type: '综合', score: 2025, minScore: 355, minRank: 165000, category: '专科' },
  { id: 523, name: '宁波职业技术学院', province: '浙江', city: '宁波', rank: 258, type: '综合', score: 2025, minScore: 375, minRank: 158000, category: '专科' },
  { id: 524, name: '温州职业技术学院', province: '浙江', city: '温州', rank: 268, type: '综合', score: 2025, minScore: 350, minRank: 168000, category: '专科' },

  // 湖北省专科
  { id: 525, name: '武汉职业技术学院', province: '湖北', city: '武汉', rank: 250, type: '综合', score: 2025, minScore: 390, minRank: 150000, category: '专科' },
  { id: 526, name: '武汉船舶职业技术学院', province: '湖北', city: '武汉', rank: 258, type: '理工', score: 2025, minScore: 375, minRank: 158000, category: '专科' },
  { id: 527, name: '湖北职业技术学院', province: '湖北', city: '孝感', rank: 270, type: '综合', score: 2025, minScore: 345, minRank: 170000, category: '专科' },
  { id: 528, name: '襄阳职业技术学院', province: '湖北', city: '襄阳', rank: 275, type: '综合', score: 2025, minScore: 335, minRank: 175000, category: '专科' },
  { id: 529, name: '黄冈职业技术学院', province: '湖北', city: '黄冈', rank: 280, type: '综合', score: 2025, minScore: 325, minRank: 180000, category: '专科' },
  { id: 530, name: '武汉铁路职业技术学院', province: '湖北', city: '武汉', rank: 265, type: '理工', score: 2025, minScore: 355, minRank: 165000, category: '专科' },

  // 河南省专科
  { id: 531, name: '黄河水利职业技术学院', province: '河南', city: '开封', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },
  { id: 532, name: '河南工业职业技术学院', province: '河南', city: '南阳', rank: 265, type: '理工', score: 2025, minScore: 355, minRank: 165000, category: '专科' },
  { id: 533, name: '河南职业技术学院', province: '河南', city: '郑州', rank: 270, type: '综合', score: 2025, minScore: 345, minRank: 170000, category: '专科' },
  { id: 534, name: '郑州铁路职业技术学院', province: '河南', city: '郑州', rank: 260, type: '理工', score: 2025, minScore: 370, minRank: 160000, category: '专科' },
  { id: 535, name: '开封大学', province: '河南', city: '开封', rank: 275, type: '综合', score: 2025, minScore: 335, minRank: 175000, category: '专科' },
  { id: 536, name: '河南经贸职业学院', province: '河南', city: '郑州', rank: 272, type: '财经', score: 2025, minScore: 340, minRank: 172000, category: '专科' },

  // 四川省专科
  { id: 537, name: '四川交通职业技术学院', province: '四川', city: '成都', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },
  { id: 538, name: '四川建筑职业技术学院', province: '四川', city: '德阳', rank: 260, type: '理工', score: 2025, minScore: 370, minRank: 160000, category: '专科' },
  { id: 539, name: '成都航空职业技术学院', province: '四川', city: '成都', rank: 252, type: '理工', score: 2025, minScore: 385, minRank: 152000, category: '专科' },
  { id: 540, name: '四川工程职业技术学院', province: '四川', city: '德阳', rank: 268, type: '理工', score: 2025, minScore: 350, minRank: 168000, category: '专科' },
  { id: 541, name: '绵阳职业技术学院', province: '四川', city: '绵阳', rank: 280, type: '理工', score: 2025, minScore: 325, minRank: 180000, category: '专科' },
  { id: 542, name: '四川电力职业技术学院', province: '四川', city: '成都', rank: 278, type: '理工', score: 2025, minScore: 330, minRank: 178000, category: '专科' },

  // 重庆市专科
  { id: 543, name: '重庆工业职业技术学院', province: '重庆', city: '重庆', rank: 260, type: '理工', score: 2025, minScore: 370, minRank: 160000, category: '专科' },
  { id: 544, name: '重庆工程职业技术学院', province: '重庆', city: '重庆', rank: 270, type: '理工', score: 2025, minScore: 345, minRank: 170000, category: '专科' },
  { id: 545, name: '重庆电子工程职业学院', province: '重庆', city: '重庆', rank: 265, type: '理工', score: 2025, minScore: 355, minRank: 165000, category: '专科' },
  { id: 546, name: '重庆城市管理职业学院', province: '重庆', city: '重庆', rank: 275, type: '综合', score: 2025, minScore: 335, minRank: 175000, category: '专科' },
  { id: 547, name: '重庆三峡职业学院', province: '重庆', city: '重庆', rank: 285, type: '农业', score: 2025, minScore: 315, minRank: 185000, category: '专科' },

  // 上海市专科
  { id: 548, name: '上海电子信息职业技术学院', province: '上海', city: '上海', rank: 250, type: '理工', score: 2025, minScore: 400, minRank: 150000, category: '专科' },
  { id: 549, name: '上海工艺美术职业学院', province: '上海', city: '上海', rank: 255, type: '艺术', score: 2025, minScore: 390, minRank: 155000, category: '专科' },
  { id: 550, name: '上海旅游高等专科学校', province: '上海', city: '上海', rank: 260, type: '财经', score: 2025, minScore: 380, minRank: 160000, category: '专科' },
  { id: 551, name: '上海出版印刷高等专科学校', province: '上海', city: '上海', rank: 268, type: '理工', score: 2025, minScore: 365, minRank: 168000, category: '专科' },

  // 北京市专科
  { id: 552, name: '北京电子科技职业学院', province: '北京', city: '北京', rank: 245, type: '理工', score: 2025, minScore: 410, minRank: 145000, category: '专科' },
  { id: 553, name: '北京工业职业技术学院', province: '北京', city: '北京', rank: 250, type: '理工', score: 2025, minScore: 400, minRank: 150000, category: '专科' },
  { id: 554, name: '北京财贸职业学院', province: '北京', city: '北京', rank: 255, type: '财经', score: 2025, minScore: 390, minRank: 155000, category: '专科' },
  { id: 555, name: '北京交通运输职业学院', province: '北京', city: '北京', rank: 260, type: '理工', score: 2025, minScore: 380, minRank: 160000, category: '专科' },
  { id: 556, name: '北京青年政治学院', province: '北京', city: '北京', rank: 270, type: '综合', score: 2025, minScore: 365, minRank: 170000, category: '专科' },

  // 广东省专科
  { id: 557, name: '深圳信息职业技术学院', province: '广东', city: '深圳', rank: 240, type: '理工', score: 2025, minScore: 420, minRank: 140000, category: '专科' },
  { id: 558, name: '广州番禺职业技术学院', province: '广东', city: '广州', rank: 250, type: '综合', score: 2025, minScore: 395, minRank: 150000, category: '专科' },
  { id: 559, name: '广州民航职业技术学院', province: '广东', city: '广州', rank: 255, type: '理工', score: 2025, minScore: 385, minRank: 155000, category: '专科' },
  { id: 560, name: '广东轻工职业技术学院', province: '广东', city: '广州', rank: 252, type: '理工', score: 2025, minScore: 390, minRank: 152000, category: '专科' },
  { id: 561, name: '顺德职业技术学院', province: '广东', city: '佛山', rank: 260, type: '综合', score: 2025, minScore: 375, minRank: 160000, category: '专科' },
  { id: 562, name: '中山火炬职业技术学院', province: '广东', city: '中山', rank: 270, type: '理工', score: 2025, minScore: 355, minRank: 170000, category: '专科' },

  // 湖南省专科
  { id: 563, name: '长沙航空职业技术学院', province: '湖南', city: '长沙', rank: 255, type: '理工', score: 2025, minScore: 380, minRank: 155000, category: '专科' },
  { id: 564, name: '湖南铁道职业技术学院', province: '湖南', city: '株洲', rank: 260, type: '理工', score: 2025, minScore: 370, minRank: 160000, category: '专科' },
  { id: 565, name: '湖南工业职业技术学院', province: '湖南', city: '长沙', rank: 268, type: '理工', score: 2025, minScore: 355, minRank: 168000, category: '专科' },
  { id: 566, name: '长沙民政职业技术学院', province: '湖南', city: '长沙', rank: 265, type: '综合', score: 2025, minScore: 360, minRank: 165000, category: '专科' },
  { id: 567, name: '湖南工艺美术职业学院', province: '湖南', city: '益阳', rank: 275, type: '艺术', score: 2025, minScore: 340, minRank: 175000, category: '专科' },
  { id: 568, name: '湖南汽车工程职业学院', province: '湖南', city: '株洲', rank: 280, type: '理工', score: 2025, minScore: 330, minRank: 180000, category: '专科' },
]

// 合并到主院校数据库
universities.push(...expandedUniversities)

// 2025年海外院校数据（含详细申请条件与高考成绩参考）
const overseasUniversities = [
  {
    id: 1, name: 'MIT', chineseName: '麻省理工学院', country: '美国', region: '北美',
    qsRank: 1, tuition: 59750, currency: 'USD',
    requirements: 'SAT 1530+/ACT 35+ 或不要求（综合评审制）',
    language: 'TOEFL 100+/IELTS 7.0+',
    gaokaoRef: '相当于国内985顶尖（660+分）',
    gaokaoScore: 660,
    path: '高考后申请需高三成绩单+SAT/ACT+科研/竞赛背景',
    difficulty: '极难',
    features: '全球顶尖理工，录取率约4%，重视科研竞赛，无需高考成绩直接申请',
    majors: '计算机、人工智能、机械、电气、物理、数学',
    majorsByScore: [
      { range: '680分以上（省前0.1%）', requirement: 'SAT 1580+/ACT 36+ | 科研/竞赛顶级', majors: ['计算机科学（CS）', '人工智能（AI）', '数学'], description: '竞争极激烈，全球申请者中Top 1%，需有IMO/IPhO等国际竞赛金牌' },
      { range: '660-680分（省前1%）', requirement: 'SAT 1550+/ACT 35+ | 科研/竞赛突出', majors: ['机械工程', '电气工程', '物理'], description: '同样竞争激烈，需有物理/数学竞赛背景或顶级科研经历' },
      { range: '640-660分（省前2-3%）', requirement: 'SAT 1530+/ACT 34+ | 综合素质强', majors: ['材料科学', '化学工程', '航空航天'], description: '可尝试，但建议同时申请英国/欧陆院校作为备选' },
    ],
    tips: '建议选择预科或SAT补习通道，需丰富课外活动与竞赛经历（AMC/USAMO/AIME等）',
  },
  {
    id: 2, name: 'Harvard University', chineseName: '哈佛大学', country: '美国', region: '北美',
    qsRank: 4, tuition: 57261, currency: 'USD',
    requirements: 'SAT 1580+/ACT 36（中位数）；录取率约3.2%',
    language: 'TOEFL 100+/IELTS 7.0+',
    gaokaoRef: '相当于国内顶尖省状元水平（680+分）',
    gaokaoScore: 680,
    path: '高考后凭高考成绩+SAT+活动背景申请；也可通过预科项目入读',
    difficulty: '极难',
    features: '文理综合最强，常青藤领头，培养领袖人才',
    majors: '法学、医学、商学、计算机、经济、政府管理',
    majorsByScore: [
      { range: '680分以上（省前0.1%）', requirement: 'SAT 1590/ACT 36 | 全面优秀+独特个性', majors: ['经济学', '政治学与国际关系', '计算机科学'], description: '常青藤最顶尖专业，录取率不足3%，需有独特个人故事和社会影响力' },
      { range: '660-680分（省前1%）', requirement: 'SAT 1550+ | 领导力+社区贡献', majors: ['生物学/医学预科', '历史学', '哲学'], description: '可申请，但哈佛会综合评估学术、艺术、社会贡献多维度' },
      { range: '640-660分（省前3%）', requirement: 'SAT 1520+ | 突出个人特色', majors: ['东亚研究', '艺术史', '教育学'], description: '可尝试人文社科专业，竞争相对理工稍缓，但仍需有深度课外活动' },
    ],
    tips: '需体现领导力、社区贡献及独特个人故事，经济需求满足可申请全额奖学金',
  },
  {
    id: 3, name: 'Stanford University', chineseName: '斯坦福大学', country: '美国', region: '北美',
    qsRank: 3, tuition: 62484, currency: 'USD',
    requirements: 'SAT 1570+/ACT 35+；录取率约3.7%',
    language: 'TOEFL 100+/IELTS 7.0+',
    gaokaoRef: '相当于国内省前50名（670+分）',
    gaokaoScore: 670,
    path: '直接申请需SAT/ACT；大陆学生多通过联合项目或预科入读',
    difficulty: '极难',
    features: '硅谷核心，创业氛围浓厚，CS/AI全球顶尖',
    majors: '计算机科学、人工智能、商科、工程、生物医学',
    majorsByScore: [
      { range: '680分以上（省前0.1%）', requirement: 'SAT 1580+/ACT 36 | 顶级CS/AI项目经历', majors: ['计算机科学（CS）', '人工智能', '计算机图形学'], description: '斯坦福CS是全球最难申请专业之一，需有实际编程项目或竞赛金牌' },
      { range: '660-680分（省前1%）', requirement: 'SAT 1550+/ACT 35 | 创业/创新经历', majors: ['商学（GSB）', '生物医学工程', '电子工程'], description: '工程学院竞争激烈，建议有机器人/科研项目经历，商学需有创业实践' },
      { range: '640-660分（省前3%）', requirement: 'SAT 1520+ | 综合背景强', majors: ['机械工程', '材料科学', '心理学'], description: '可申请非CS专业，但仍需有突出课外活动，建议同时申请英国院校' },
    ],
    tips: '科技方向首选，建议有编程项目或竞赛经历（USACO等）',
  },
  {
    id: 4, name: 'University of Oxford', chineseName: '牛津大学', country: '英国', region: '欧洲',
    qsRank: 3, tuition: 30000, currency: 'GBP',
    requirements: 'A-level A*AA-A*A*A 或高考一本线上140分以上（省前0.5%）',
    language: 'IELTS 7.0-7.5（含各项6.5+）',
    gaokaoRef: '省级前0.5%，相当于650+分',
    gaokaoScore: 650,
    path: '持高考成绩+笔试+面试直申，中国学生可直申本科一年级',
    difficulty: '极难',
    features: '英国顶尖，可持高考成绩申请，重视学科笔试面试',
    majors: '法学、哲学、医学、数学、计算机、文学',
    majorsByScore: [
      { range: '680分以上（省前0.1%）', requirement: '高考680+分+A*A*A（竞赛生优先）| 需专业笔试+面试', majors: ['数学（MMath）', '计算机科学', 'PPE（哲学政治经济）'], description: '数学系要求STEP 2/3达到Grade 1；PPE需通过笔试+30分钟面试；极度竞争' },
      { range: '650-680分（省前1%）', requirement: '高考650+分+A*AA或一本线上140分+ IELTS 7.5', majors: ['物理学', '化学', '法学', '历史学'], description: '各专业有笔试（如PAT/LNAT/HAT等），面试30分钟，高考理科生可申请大部分理工专业' },
      { range: '620-650分（省前3%）', requirement: '高考一本线上100分+IELTS 7.0 | 部分专业有笔试', majors: ['地理学', '考古学', '神学与宗教'], description: '人文社科专业相对竞争较小，但仍需笔试面试；考古学需参加笔试' },
    ],
    tips: '牛津各专业有笔试（如哲学PPE、数学等），建议提前准备；高考650+可有竞争力',
  },
  {
    id: 5, name: 'University of Cambridge', chineseName: '剑桥大学', country: '英国', region: '欧洲',
    qsRank: 2, tuition: 30000, currency: 'GBP',
    requirements: 'A-level A*AA 或高考成绩省前1%（约640+分）',
    language: 'IELTS 7.5（含各项7.0+）',
    gaokaoRef: '省级前1%，相当于640+分',
    gaokaoScore: 640,
    path: '中国学生可持高考+STEP数学笔试（理工方向）直申',
    difficulty: '极难',
    features: '英国顶尖，理工优势，多诺贝尔奖得主',
    majors: '数学、物理、工程、计算机、自然科学、经济',
    majorsByScore: [
      { range: '680分以上（省前0.1%）', requirement: '高考680+分+STEP 1 S级（竞赛生优先）', majors: ['数学（Math Tripos）', '计算机科学', '自然科学（物理方向）'], description: '剑桥数学系全球第一，需STEP 2&3均达S级；BMO金牌可豁免STEP' },
      { range: '640-680分（省前1%）', requirement: '高考640+分+STEP 2达S级+IELTS 7.5', majors: ['工程学', '化学工程', '经济学'], description: '工程系需物理+数学突出；经济学需参加ECAA笔试；建议提前6个月准备' },
      { range: '620-640分（省前2-3%）', requirement: '高考620+分+STEP 2达A级+IELTS 7.0', majors: ['土地经济', '建筑学', '考古学'], description: '人文专业竞争相对较小；建筑学需作品集+面试' },
    ],
    tips: '数学/工程方向需参加STEP考试，文科方向需笔试+面试；中国大使馆奖学金可申请',
  },
  {
    id: 6, name: 'Imperial College London', chineseName: '帝国理工学院', country: '英国', region: '欧洲',
    qsRank: 2, tuition: 36000, currency: 'GBP',
    requirements: 'A-level AAA-A*AB 或高考620+分（省前3%）',
    language: 'IELTS 6.5-7.0',
    gaokaoRef: '省级前3%，相当于620-640分',
    gaokaoScore: 625,
    path: '可凭高考成绩直申，理工商三大学院均接受中国高考',
    difficulty: '难',
    features: '全球理工顶尖，伦敦地理优势，就业极强',
    majors: '工程学、化学、物理、计算机、医学、商科',
    majorsByScore: [
      { range: '640分以上（省前2%）', requirement: '高考640+分+数学/物理单科接近满分+IELTS 7.0', majors: ['计算机科学（CS）', '数学与计算机', '电子电气工程'], description: 'IC最强专业，录取率低于10%，需数学+理综非常突出，有竞赛背景加分' },
      { range: '620-640分（省前3%）', requirement: '高考620+分+数学成绩优秀+IELTS 6.5', majors: ['机械工程', '化学工程', '土木工程', '物理'], description: '可凭高考直申，无需SAT；数学单科成绩是重要参考' },
      { range: '580-620分（省前5-10%）', requirement: '高考一本线+IELTS 6.5 | 可考虑预科', majors: ['地球物理', '材料工程', '生物工程'], description: '一本线以上可尝试，部分专业需面试；预科升学到概率较高' },
    ],
    tips: '高考620+且数学接近满分者竞争力较强；无需SAT；可直接申请',
  },
  {
    id: 7, name: 'UCL', chineseName: '伦敦大学学院', country: '英国', region: '欧洲',
    qsRank: 9, tuition: 29000, currency: 'GBP',
    requirements: 'A-level AAB-AAA 或高考600-620分',
    language: 'IELTS 6.5（含各项6.0+）',
    gaokaoRef: '本科线以上100分，约600-620分',
    gaokaoScore: 610,
    path: '高考成绩直申，通常要求省内前5-10%',
    difficulty: '较难',
    features: '伦敦市中心，综合强校，文理兼优',
    majors: '建筑、法律、医学、工程、经济、教育',
    majorsByScore: [
      { range: '620分以上（省前3%）', requirement: '高考620+分+IELTS 7.0+ | 竞赛/科研加分', majors: ['建筑学', '法学', '医学'], description: 'UCL建筑学世界前三（AA合作），需作品集+面试；法学需LNAT笔试' },
      { range: '600-620分（省前5-10%）', requirement: '高考600+分+IELTS 6.5+ | 单科突出优先', majors: ['计算机科学', '经济学', '工程学（电子/机械）'], description: 'CS是UCL最热门专业之一，录取竞争激烈；经济学需数学A*' },
      { range: '560-600分（省前15-20%）', requirement: '高考一本线+IELTS 6.5+', majors: ['教育学', '语言学', '心理学', '历史学'], description: '人文社科专业相对容易录取，语言要求较低；教育学可申Tesol方向' },
    ],
    tips: '相对好申请，高考600+且英语好者可尝试；建议提前规划语言课',
  },
  {
    id: 8, name: 'University of Edinburgh', chineseName: '爱丁堡大学', country: '英国', region: '欧洲',
    qsRank: 27, tuition: 26500, currency: 'GBP',
    requirements: 'A-level AAB-AAA 或高考585-610分',
    language: 'IELTS 6.5（含各项6.0）',
    gaokaoRef: '本科线以上80-100分，约585-610分',
    gaokaoScore: 595,
    path: '高考成绩+语言成绩直申，苏格兰环境优美，生活成本低',
    difficulty: '中等',
    features: '文理综合，苏格兰最古老大学之一，人文气息浓',
    majors: '医学、商科、计算机、哲学、法学、语言学',
    majorsByScore: [
      { range: '610分以上（省前5%）', requirement: '高考610+分+IELTS 7.0+', majors: ['计算机科学（CS）', '人工智能', '兽医学'], description: 'CS和AI是爱大优势专业，人工智能中心全球领先；兽医学竞争最激烈' },
      { range: '585-610分（省前8-10%）', requirement: '高考585+分+IELTS 6.5+', majors: ['商学（BCom）', '法学', '数学', '物理学'], description: '商学需高中数学优秀；物理需高考数学+物理；可凭高考直申，无需额外考试' },
      { range: '540-585分（省前15-20%）', requirement: '高考540+分+IELTS 6.5+', majors: ['教育学（TESOL）', '语言学', '历史学', '考古学'], description: '人文专业对高考分要求较低；TESOL是爱大特色专业，就业前景好' },
    ],
    tips: '高考585+且雅思6.5+可申请，相对友好；部分专业加试',
  },
  {
    id: 9, name: 'National University of Singapore', chineseName: '新加坡国立大学', country: '新加坡', region: '亚洲',
    qsRank: 8, tuition: 18500, currency: 'SGD',
    requirements: '高考成绩一本线上100分（约600+分）或SAT 1450+/A-level ABB',
    language: 'IELTS 6.5+/TOEFL 92+（英语授课，无需额外语言课）',
    gaokaoRef: '省内前5%，约600-630分，华语区学习体验好',
    gaokaoScore: 600,
    path: '中国学生可直接持高考成绩申请，NUS也接受高考直申',
    difficulty: '较难',
    features: 'QS亚洲第一，费用远低于欧美，英语授课，中华文化氛围',
    majors: '计算机、商科、工程、法学、医学、设计',
    majorsByScore: [
      { range: '630分以上（省前2%）', requirement: '高考630+分+IELTS 7.0+/高考数学135+', majors: ['计算机科学（NUS CS）', '商业分析（BA）', '法学'], description: 'NUS CS是亚洲最难录取专业之一，全球申请；法学需参加笔试' },
      { range: '600-630分（省前5%）', requirement: '高考600+分+IELTS 6.5+ | 数学/理综优秀', majors: ['电子工程', '机械工程', '化学工程', '计量金融'], description: '工学院是NUS最大院系，录取相对宽松；理工科学生重点申请方向' },
      { range: '580-600分（省前8-10%）', requirement: '高考一本线+100分+IELTS 6.5+', majors: ['生物医学工程', '环境工程', '艺术设计', '社会学'], description: '一本线以上100分即可申请；设计专业需提交作品集；性价比最高区间' },
    ],
    tips: '新加坡高考直申性价比极高，申请成功率优于英美顶校，推荐中等偏上学生首选',
  },
  {
    id: 10, name: 'Nanyang Technological University', chineseName: '南洋理工大学', country: '新加坡', region: '亚洲',
    qsRank: 15, tuition: 18000, currency: 'SGD',
    requirements: '高考成绩一本线以上80分（约580+）或SAT 1400+/A-level ABB',
    language: 'IELTS 6.5+/TOEFL 90+',
    gaokaoRef: '省内前8%，约580-615分',
    gaokaoScore: 585,
    path: '中国学生可持高考成绩直申，NTU对中国学生友好',
    difficulty: '较难',
    features: '理工优势，校园美丽，新加坡双子星院校之一',
    majors: '工程、科学、商科、人文、艺术设计、教育',
    majorsByScore: [
      { range: '600分以上（省前5%）', requirement: '高考600+分+IELTS 6.5+ | 数学/物理优秀', majors: ['计算机工程（CE）', '电子工程', '机械工程', '材料工程'], description: 'NTU工科是王牌，EEE学院（电气与电子工程）亚洲前三；工科生首选' },
      { range: '580-600分（省前8-10%）', requirement: '高考一本线+80分+IELTS 6.5+', majors: ['商学（会计/金融）', '计算机科学', '生物医学工程', '人工智能'], description: 'CS和AI是NTU新设专业，发展迅速；商科需数学优秀' },
      { range: '540-580分（省前15-20%）', requirement: '高考一本线以上+IELTS 6.5+', majors: ['教育学（中文教育）', '传播学', '心理学', '艺术设计'], description: '人文社科学费性价比高；艺术设计专业需作品集；录取相对宽松' },
    ],
    tips: '工科/理科成绩好的同学优先考虑，与NUS同为新加坡顶尖；学费比欧美少一半以上',
  },
  {
    id: 11, name: 'University of Toronto', chineseName: '多伦多大学', country: '加拿大', region: '北美',
    qsRank: 25, tuition: 48000, currency: 'CAD',
    requirements: '高考成绩一本线以上60-80分（约565-590分）',
    language: 'IELTS 6.5+/TOEFL 100+',
    gaokaoRef: '省内前10-15%，约565-590分',
    gaokaoScore: 575,
    path: '高考成绩直申，加拿大免签可无忧，移民通道顺畅',
    difficulty: '中等',
    features: '加拿大顶尖，移民友好，华人社区成熟',
    majors: '计算机、医学、商科、工程、社会科学、法学',
    tips: '性价比较高，高考570+可竞争；加拿大学习工作移民路径清晰',
  },
  {
    id: 12, name: 'University of British Columbia', chineseName: '不列颠哥伦比亚大学', country: '加拿大', region: '北美',
    qsRank: 34, tuition: 40000, currency: 'CAD',
    requirements: '高考成绩一本线以上40-60分（约550-575分）',
    language: 'IELTS 6.5+/TOEFL 90+',
    gaokaoRef: '省内前15-20%，约550-575分',
    gaokaoScore: 560,
    path: '高考直申，位于温哥华，环境美丽，华人聚居地',
    difficulty: '中等',
    features: '温哥华大学，自然环境极佳，华人生活便利',
    majors: '林业、商科、计算机、工程、医学、艺术',
    tips: '生活成本高，但环境好，高考550+可申请；专业方向选择灵活',
  },
  {
    id: 13, name: 'University of Melbourne', chineseName: '墨尔本大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 13, tuition: 37000, currency: 'AUD',
    requirements: 'ATAR 88+ 或高考一本线以上50分（约555-580分）',
    language: 'IELTS 6.5+',
    gaokaoRef: '省内前12%，约555-580分',
    gaokaoScore: 565,
    path: '高考成绩直申澳洲高校，澳洲普遍接受中国高考成绩',
    difficulty: '中等',
    features: '澳洲顶尖，多元文化，移民路径好',
    majors: '商科、法学、医学、工程、艺术、教育',
    tips: '澳洲名校高考门槛合理，高考550+可考虑；学费相对英美低',
  },
  {
    id: 14, name: 'University of Sydney', chineseName: '悉尼大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 18, tuition: 35000, currency: 'AUD',
    requirements: 'ATAR 85+ 或高考一本线以上30-50分（约540-565分）',
    language: 'IELTS 6.5+',
    gaokaoRef: '省内前15%，约540-565分',
    gaokaoScore: 550,
    path: '高考成绩直申，悉尼华人多，中文服务完善',
    difficulty: '中等',
    features: '澳洲八校联盟成员，华人社区大，生活便利',
    majors: '商科、法学、建筑、牙医、工程、艺术',
    tips: '高考540+申请难度相对低，澳洲工作签证较好获取',
  },
  {
    id: 15, name: 'ETH Zurich', chineseName: '苏黎世联邦理工学院', country: '瑞士', region: '欧洲',
    qsRank: 7, tuition: 800, currency: 'CHF',
    requirements: '高考成绩+数学/物理竞赛背景，等效A-level ABB以上',
    language: 'IELTS 7.0+（也接受德语/法语授课项目）',
    gaokaoRef: '需高考630+且数理优秀，部分项目有笔试',
    gaokaoScore: 630,
    path: '欧洲性价比之王，本科学费极低，需德语或英语能力',
    difficulty: '较难',
    features: '全球理工最强之一，学费近乎免费，欧洲生活体验',
    majors: '数学、物理、计算机、化学、工程、材料',
    tips: '学费仅约800CHF/学期，全球最低之一；但语言要求高，建议学德语',
  },
  {
    id: 16, name: 'The University of Hong Kong', chineseName: '香港大学', country: '中国香港', region: '亚洲',
    qsRank: 26, tuition: 145000, currency: 'HKD',
    requirements: '高考成绩省级前0.5-1%（约645-665分），部分内地招生',
    language: '英语授课，IELTS 6.5+或高中英语优秀',
    gaokaoRef: '省级前1%以内，约645-665分',
    gaokaoScore: 650,
    path: '高考直申香港大学，通过内地招生计划录取，大量奖学金',
    difficulty: '极难',
    features: '亚洲顶尖，全英文授课，中西文化融合，奖学金丰厚',
    majors: '法学、医学、商科、工程、文学、教育',
    majorsByScore: [
      { range: '660分以上（省前0.1%）', requirement: '高考660+分+IELTS 7.0+面试通过', majors: ['医学（内外全科）', '法学（JD方向）', '金融学'], description: '港大医学竞争极度激烈，需通过多轮面试；全额奖学金仅给省前100名' },
      { range: '645-660分（省前1%）', requirement: '高考645+分+IELTS 6.5+ | 综合实力强', majors: ['商业管理（IBGM）', '工程（计算机/EEE）', '精算学'], description: 'IBGM是港大与海外双学位；计算机工程竞争激烈；精算专业全球认可度高' },
      { range: '620-645分（省前2-3%）', requirement: '高考620+分+IELTS 6.5+', majors: ['文学（人文社科）', '教育学（Tesol）', '建筑学', '牙科学'], description: '人文社科专业相对好申请；建筑需作品集；牙科竞争也激烈但分数稍低' },
    ],
    tips: '内地招生有独立计划，高考成绩接近省状元，提供全额奖学金给优秀生',
  },
  {
    id: 17, name: 'The Chinese University of Hong Kong', chineseName: '香港中文大学', country: '中国香港', region: '亚洲',
    qsRank: 47, tuition: 145000, currency: 'HKD',
    requirements: '高考成绩省级前2-3%（约625-645分）',
    language: '中英双语授课，语言要求相对友好',
    gaokaoRef: '省级前2-3%，约625-645分',
    gaokaoScore: 630,
    path: '高考直申，中文大学有大量面向内地生的奖学金计划',
    difficulty: '难',
    features: '中英双语，内地生友好，生活成本比北美低',
    majors: '商科、工程、医学、法学、人文、理学',
    majorsByScore: [
      { range: '640分以上（省前2%）', requirement: '高考640+分+IELTS 6.5+', majors: ['环球商业管理（GBM）', '计量金融', '医学（中医/西医）'], description: 'GBM是双学位项目（港中文+北大/欧洲顶级商学院）；医学竞争激烈' },
      { range: '625-640分（省前3%）', requirement: '高考625+分+IELTS 6.5+', majors: ['计算机科学', '电子工程', '法学', '新闻与传播学'], description: 'CS和EE竞争较大；法学需参加ILAS笔试；新闻传播是港中文王牌专业' },
      { range: '590-625分（省前5-10%）', requirement: '高考590+分+IELTS 6.0+', majors: ['酒店管理', '社会科学', '地理与资源管理', '历史学'], description: '人文社科专业录取分数稍低；酒店管理全球前十，性价比极高' },
    ],
    tips: '中文大学对内地生相当友好，语言障碍小，部分专业中文授课',
  },
  {
    id: 18, name: 'Hong Kong University of Science and Technology', chineseName: '香港科技大学', country: '中国香港', region: '亚洲',
    qsRank: 47, tuition: 145000, currency: 'HKD',
    requirements: '高考成绩省级前3-5%（约615-635分）',
    language: '英语授课，高中英语优秀者可直申',
    gaokaoRef: '省级前3-5%，约615-635分',
    gaokaoScore: 620,
    path: '高考直申，理工商极强，毕业去向好',
    difficulty: '难',
    features: '理工全球顶尖，MBA知名，就业超强',
    majors: '计算机、工程、商科、数学、环境科学',
    majorsByScore: [
      { range: '630分以上（省前2%）', requirement: '高考630+分+IELTS 6.5+/数学135+', majors: ['计算机科学与工程（CS&E）', '人工智能（AI）', '电子工程'], description: '港科大CS/AI全球排名前15，AI是最强专业；大陆生录取比例高' },
      { range: '615-630分（省前3-5%）', requirement: '高考615+分+IELTS 6.5+', majors: ['机械工程', '化学工程', '商学院（金融/会计）', '数学'], description: '港科大商学院就业率极高，投行/咨询target school；工科生也可申商科双学位' },
      { range: '580-615分（省前8-12%）', requirement: '高考580+分+IELTS 6.5+', majors: ['环境工程', '生物学', '人文社科', '数据科学与技术'], description: '环境科学是港科大特色；数据科学是新兴专业，就业极好' },
    ],
    tips: '内地生招生规模大，AI/CS专业全球排名极高，强烈推荐理工科高分生',
  },

  // ------------------- 500-550分区间（可申请的世界知名院校）-------------------
  {
    id: 30, name: 'University of Sydney', chineseName: '悉尼大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 42, tuition: 45000, currency: 'AUD',
    requirements: '高考成绩65%-80%（即450-560分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 85',
    gaokaoRef: '高考550分可申请（达到总分75%）',
    gaokaoScore: 550,
    path: '高考成绩直申，无需额外考试',
    difficulty: '中等',
    features: '澳洲八大之一，医学、法学、商科顶尖',
    majors: '医学、法学、商科、计算机、工程',
    tips: '医学专业要求高，可选其他优势专业',
  },
  {
    id: 31, name: 'University of Queensland', chineseName: '昆士兰大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 50, tuition: 43000, currency: 'AUD',
    requirements: '高考成绩60%-75%（即420-525分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 87',
    gaokaoRef: '高考520分可申请（达到总分70%）',
    gaokaoScore: 520,
    path: '高考成绩直申，澳洲八大中性价比高',
    difficulty: '中等',
    features: '科研型大学，生物、环境、农业领先',
    majors: '农业、生物技术、环境科学、酒店管理',
    tips: '高考520+可申请，雅思要求相对灵活',
  },
  {
    id: 32, name: 'University of New South Wales', chineseName: '新南威尔士大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 45, tuition: 46000, currency: 'AUD',
    requirements: '高考成绩70%-85%（即490-595分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 90',
    gaokaoRef: '高考540分可申请（达到总分72%）',
    gaokaoScore: 540,
    path: '高考成绩直申，工程学院澳洲第一',
    difficulty: '中等偏难',
    features: '工程、商科、计算机均强，澳洲就业率高',
    majors: '工程、商科、计算机、金融',
    tips: '工程专业澳洲第一，商科也很好',
  },
  {
    id: 33, name: 'University of Melbourne', chineseName: '墨尔本大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 33, tuition: 48000, currency: 'AUD',
    requirements: '不接受高考成绩，需用A-level/IB/AP',
    language: 'IELTS 6.5（单项6.0）或TOEFL 79',
    gaokaoRef: '建议高考580+走预科通道',
    gaokaoScore: 580,
    path: '预科+本科，适合优秀学生',
    difficulty: '难',
    features: '澳洲第一，医学、法学、商科全球领先',
    majors: '医学、法学、商科、工程',
    tips: '不接受高考直申，建议申请预科项目',
  },
  {
    id: 34, name: 'University of Toronto', chineseName: '多伦多大学', country: '加拿大', region: '北美',
    qsRank: 25, tuition: 45000, currency: 'CAD',
    requirements: '高考成绩一本线上（530+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 100',
    gaokaoRef: '高考550分可申请（需达一本线）',
    gaokaoScore: 550,
    path: '高考成绩+高中成绩申请',
    difficulty: '难',
    features: '加拿大第一，医学、计算机顶尖',
    majors: '计算机、医学、工程、商科、数学',
    tips: '录取竞争激烈，建议提前准备',
  },
  {
    id: 35, name: 'University of British Columbia', chineseName: '不列颠哥伦比亚大学', country: '加拿大', region: '北美',
    qsRank: 47, tuition: 42000, currency: 'CAD',
    requirements: '高考成绩一本线上（530+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 90',
    gaokaoRef: '高考530分可申请（达到一本线）',
    gaokaoScore: 530,
    path: '高考成绩直申，风景优美',
    difficulty: '中等偏难',
    features: '加拿大前三，环境科学全球领先',
    majors: '环境科学、商科、计算机、工程',
    tips: '温哥华气候宜人，留学成本相对较低',
  },
  {
    id: 36, name: 'McGill University', chineseName: '麦吉尔大学', country: '加拿大', region: '北美',
    qsRank: 29, tuition: 41000, currency: 'CAD',
    requirements: '高考成绩一本线上（530+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 90',
    gaokaoRef: '高考540分可申请（达到一本线）',
    gaokaoScore: 540,
    path: '高考成绩+高中成绩申请',
    difficulty: '难',
    features: '加拿大医学博士类大学之首',
    majors: '医学、工程、商科、文学',
    tips: '医学类全球顶尖，录取要求高',
  },
  {
    id: 37, name: 'University of Edinburgh', chineseName: '爱丁堡大学', country: '英国', region: '欧洲',
    qsRank: 22, tuition: 28000, currency: 'GBP',
    requirements: '高考成绩80%以上（560+分）',
    language: 'IELTS 6.5（单项5.5）或TOEFL 92',
    gaokaoRef: '高考560分可申请（达到总分80%）',
    gaokaoScore: 560,
    path: '高考成绩直申，部分专业需学科成绩',
    difficulty: '难',
    features: '英国前五，计算机、文学、医学顶尖',
    majors: '计算机、医学、文学、工程、商科',
    tips: '部分专业需数学/物理成绩',
  },
  {
    id: 38, name: 'University of Manchester', chineseName: '曼彻斯特大学', country: '英国', region: '欧洲',
    qsRank: 27, tuition: 26000, currency: 'GBP',
    requirements: '高考成绩80%以上（560+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 90',
    gaokaoRef: '高考540分可申请（达到总分75%）',
    gaokaoScore: 540,
    path: '高考成绩直申',
    difficulty: '中等偏难',
    features: '英国红砖大学，商科、工程、化学顶尖',
    majors: '商科、工程、计算机、化学、材料',
    tips: '招生规模大，录取相对友好',
  },
  {
    id: 39, name: 'King\'s College London', chineseName: '伦敦国王学院', country: '英国', region: '欧洲',
    qsRank: 40, tuition: 27000, currency: 'GBP',
    requirements: '高考成绩75%以上（525+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 90',
    gaokaoRef: '高考520分可申请（达到总分70%）',
    gaokaoScore: 520,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '英国前五，医学、法学、人文领先',
    majors: '医学、法学、工程、商科、人文',
    tips: '医学预科需另申请',
  },
  {
    id: 40, name: 'University of Warwick', chineseName: '华威大学', country: '英国', region: '欧洲',
    qsRank: 67, tuition: 25000, currency: 'GBP',
    requirements: '高考成绩80%以上（560+分）',
    language: 'IELTS 6.5（单项6.0）或TOEFL 92',
    gaokaoRef: '高考540分可申请（需达80%）',
    gaokaoScore: 540,
    path: '高考成绩直申',
    difficulty: '中等偏难',
    features: '商科全球前20，数学、统计顶尖',
    majors: '商科、数学、统计、计算机、工程',
    tips: 'WBS商学院全球知名',
  },
  {
    id: 41, name: 'University of Hong Kong', chineseName: '香港大学', country: '中国香港', region: '亚洲',
    qsRank: 26, tuition: 182000, currency: 'HKD',
    requirements: '高考成绩一本线上80分（600+分）',
    language: 'IELTS 6.5或TOEFL 80',
    gaokaoRef: '高考600分可申请（超一本线80分）',
    gaokaoScore: 600,
    path: '高考提前批申请',
    difficulty: '极难',
    features: '亚洲前五，医学、商科、法学顶尖',
    majors: '医学、商科、法学、工程、建筑',
    tips: '竞争激烈，需综合能力强',
  },
  {
    id: 42, name: 'Chinese University of Hong Kong', chineseName: '香港中文大学', country: '中国香港', region: '亚洲',
    qsRank: 47, tuition: 178000, currency: 'HKD',
    requirements: '高考成绩一本线上（530+分）',
    language: 'IELTS 6.0或TOEFL 80',
    gaokaoRef: '高考560分可申请（超一本线30分）',
    gaokaoScore: 560,
    path: '高考提前批申请',
    difficulty: '难',
    features: '亚洲前十，商学院认证度高',
    majors: '商科、计算机、医学、文学',
    tips: '提供全额奖学金机会',
  },
  {
    id: 43, name: 'Hong Kong University of Science and Technology', chineseName: '香港科技大学', country: '中国香港', region: '亚洲',
    qsRank: 60, tuition: 180000, currency: 'HKD',
    requirements: '高考成绩一本线上60分（580+分）',
    language: 'IELTS 6.0或TOEFL 80',
    gaokaoRef: '高考580分可申请（超一本线60分）',
    gaokaoScore: 580,
    path: '高考提前批申请',
    difficulty: '难',
    features: '工科全球前20，商学院顶尖',
    majors: '工程、商科、计算机、数学',
    tips: '理工科学生首选',
  },

  // ------------------- 450-500分区间（可申请的海外优质院校）-------------------
  {
    id: 44, name: 'University of Queensland', chineseName: '昆士兰大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 50, tuition: 43000, currency: 'AUD',
    requirements: '高考成绩60%-75%（即420-525分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考480分可申请（达到总分65%）',
    gaokaoScore: 480,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '科研实力强，学费相对较低',
    majors: '生物科学、环境科学、酒店管理、商科',
    tips: '语言成绩不够可配语言班',
  },
  {
    id: 45, name: 'University of Adelaide', chineseName: '阿德莱德大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 111, tuition: 40000, currency: 'AUD',
    requirements: '高考成绩60%-70%（即420-490分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考470分可申请（达到总分65%）',
    gaokaoScore: 470,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '澳洲八大之一，葡萄酒专业世界领先',
    majors: '葡萄酒酿造、农业、工程、医学',
    tips: '阿德莱德生活成本低',
  },
  {
    id: 46, name: 'University of Canterbury', chineseName: '坎特伯雷大学', country: '新西兰', region: '大洋洲',
    qsRank: 258, tuition: 28000, currency: 'NZD',
    requirements: '高考成绩65%（约455分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考450分可申请（达到总分65%）',
    gaokaoScore: 450,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '工程类课程优秀，性价比高',
    majors: '工程、计算机、商科、林业',
    tips: '新西兰移民政策友好',
  },
  {
    id: 47, name: 'University of Waikato', chineseName: '怀卡托大学', country: '新西兰', region: '大洋洲',
    qsRank: 250, tuition: 26000, currency: 'NZD',
    requirements: '高考成绩60%（约420分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考420分可申请',
    gaokaoScore: 420,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '管理学、酒店管理知名',
    majors: '管理学、酒店管理、计算机、教育',
    tips: '留学成本低，移民加分',
  },
  {
    id: 48, name: 'University of Exeter', chineseName: '埃克塞特大学', country: '英国', region: '欧洲',
    qsRank: 153, tuition: 22000, currency: 'GBP',
    requirements: '高考成绩75%以上（525+分）',
    language: 'IELTS 6.5（单项5.5）或TOEFL 90',
    gaokaoRef: '高考490分可申请（需达总分75%）',
    gaokaoScore: 490,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '商学院三重认证，商科优秀',
    majors: '商科、会计、金融、管理',
    tips: '会计与金融专业强',
  },
  {
    id: 49, name: 'University of Leeds', chineseName: '利兹大学', country: '英国', region: '欧洲',
    qsRank: 82, tuition: 24000, currency: 'GBP',
    requirements: '高考成绩75%以上（525+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考490分可申请（达到总分75%）',
    gaokaoScore: 490,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '商学院三重认证，传媒顶尖',
    majors: '商科、传媒、工程、设计',
    tips: '传媒学院英国前三',
  },
  {
    id: 50, name: 'University of Sheffield', chineseName: '谢菲尔德大学', country: '英国', region: '欧洲',
    qsRank: 96, tuition: 23000, currency: 'GBP',
    requirements: '高考成绩75%以上（525+分）',
    language: 'IELTS 6.0（单项5.0）或TOEFL 80',
    gaokaoRef: '高考480分可申请（达到总分75%）',
    gaokaoScore: 480,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '工程类优秀，科研实力强',
    majors: '工程、建筑、计算机、材料科学',
    tips: '工科生首选',
  },
  {
    id: 51, name: 'University of Nottingham', chineseName: '诺丁汉大学', country: '英国', region: '欧洲',
    qsRank: 100, tuition: 23000, currency: 'GBP',
    requirements: '高考成绩75%以上（525+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考480分可申请（达到总分75%）',
    gaokaoScore: 480,
    path: '高考成绩直申',
    difficulty: '中等',
    features: '商学院三重认证，综合实力强',
    majors: '商科、计算机、工程、心理学',
    tips: '英国老牌名校',
  },
  {
    id: 52, name: 'University of Liverpool', chineseName: '利物浦大学', country: '英国', region: '欧洲',
    qsRank: 190, tuition: 21000, currency: 'GBP',
    requirements: '高考成绩70%以上（490+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 78',
    gaokaoRef: '高考470分可申请（达到总分70%）',
    gaokaoScore: 470,
    path: '高考成绩直申',
    difficulty: '中等偏易',
    features: '红砖大学之一，计算机优秀',
    majors: '计算机、工程、商科、数学',
    tips: '留学成本适中',
  },
  {
    id: 53, name: 'City University of Hong Kong', chineseName: '香港城市大学', country: '中国香港', region: '亚洲',
    qsRank: 120, tuition: 175000, currency: 'HKD',
    requirements: '高考成绩一本线上30分（560+分）',
    language: 'IELTS 6.5或TOEFL 79',
    gaokaoRef: '高考560分可申请（超一本线30分）',
    gaokaoScore: 560,
    path: '高考提前批申请',
    difficulty: '难',
    features: '工科、商科优秀，排名上升快',
    majors: '工程、商科、计算机、媒体',
    tips: '工程学院排名高',
  },
  {
    id: 54, name: 'Hong Kong Polytechnic University', chineseName: '香港理工大学', country: '中国香港', region: '亚洲',
    qsRank: 65, tuition: 176000, currency: 'HKD',
    requirements: '高考成绩一本线上（530+分）',
    language: 'IELTS 6.0或TOEFL 80',
    gaokaoRef: '高考530分可申请',
    gaokaoScore: 530,
    path: '高考提前批申请',
    difficulty: '中等偏难',
    features: '酒店管理全球前三，设计系优秀',
    majors: '酒店管理、设计、工程、商科',
    tips: '酒店与旅游管理世界顶尖',
  },

  // ------------------- 400-450分区间（可申请的海外院校）-------------------
  {
    id: 55, name: 'University of Western Australia', chineseName: '西澳大学', country: '澳大利亚', region: '大洋洲',
    qsRank: 93, tuition: 38000, currency: 'AUD',
    requirements: '高考成绩60%（约420分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考420分可申请（达到总分60%）',
    gaokaoScore: 420,
    path: '高考成绩直申',
    difficulty: '中等偏易',
    features: '澳洲八大之一，矿物与采矿全球第一',
    majors: '采矿工程、地质科学、农业、生物科学',
    tips: '珀斯生活成本相对较低',
  },
  {
    id: 56, name: 'University of Otago', chineseName: '奥塔哥大学', country: '新西兰', region: '大洋洲',
    qsRank: 217, tuition: 29000, currency: 'NZD',
    requirements: '高考成绩65%（约455分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考440分可申请',
    gaokaoScore: 440,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '新西兰第一所大学，医学、牙科顶尖',
    majors: '医学、牙科、健康科学、商科',
    tips: '医学预科需提前申请',
  },
  {
    id: 57, name: 'University of Canterbury', chineseName: '坎特伯雷大学', country: '新西兰', region: '大洋洲',
    qsRank: 258, tuition: 28000, currency: 'NZD',
    requirements: '高考成绩65%（约455分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考430分可申请',
    gaokaoScore: 430,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '工程系优秀，就业率高',
    majors: '工程、计算机、商科、林业',
    tips: '工科课程实践性强',
  },
  {
    id: 58, name: 'Massey University', chineseName: '梅西大学', country: '新西兰', region: '大洋洲',
    qsRank: 239, tuition: 26000, currency: 'NZD',
    requirements: '高考成绩60%（约420分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考410分可申请',
    gaokaoScore: 410,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '兽医、农业、商科知名',
    majors: '兽医、农业、商科、航空',
    tips: '兽医专业世界领先',
  },
  {
    id: 59, name: 'Auckland University of Technology', chineseName: '奥克兰理工大学', country: '新西兰', region: '大洋洲',
    qsRank: 284, tuition: 27000, currency: 'NZD',
    requirements: '高考成绩60%（约420分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考400分可申请',
    gaokaoScore: 400,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '就业率高，课程实践性强',
    majors: '酒店管理、旅游、设计、工程',
    tips: '酒店管理专业就业率高',
  },
  {
    id: 60, name: 'University of Portsmouth', chineseName: '朴茨茅斯大学', country: '英国', region: '欧洲',
    qsRank: 301, tuition: 19000, currency: 'GBP',
    requirements: '高考成绩60%以上（420+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考410分可申请（达到总分60%）',
    gaokaoScore: 410,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '性价比高，就业服务好',
    majors: '商科、计算机、工程、旅游',
    tips: '留学成本低',
  },
  {
    id: 61, name: 'University of Brighton', chineseName: '布莱顿大学', country: '英国', region: '欧洲',
    qsRank: 322, tuition: 18000, currency: 'GBP',
    requirements: '高考成绩60%以上（420+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考400分可申请',
    gaokaoScore: 400,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '艺术设计、酒店管理优秀',
    majors: '艺术设计、酒店管理、商科、传媒',
    tips: '艺术学院声誉好',
  },
  {
    id: 62, name: 'University of Plymouth', chineseName: '普利茅斯大学', country: '英国', region: '欧洲',
    qsRank: 351, tuition: 17000, currency: 'GBP',
    requirements: '高考成绩60%以上（420+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考400分可申请',
    gaokaoScore: 400,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '海洋科学、计算机优秀',
    majors: '海洋科学、计算机、工程、商科',
    tips: '留学成本低',
  },
  {
    id: 63, name: 'Coventry University', chineseName: '考文垂大学', country: '英国', region: '欧洲',
    qsRank: 571, tuition: 18000, currency: 'GBP',
    requirements: '高考成绩60%以上（420+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考400分可申请',
    gaokaoScore: 400,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '汽车工程、设计优秀',
    majors: '汽车工程、设计、商业、工程',
    tips: '工程类课程实践性强',
  },
  {
    id: 64, name: 'University of Central Lancashire', chineseName: '中央兰开夏大学', country: '英国', region: '欧洲',
    qsRank: 801, tuition: 16000, currency: 'GBP',
    requirements: '高考成绩60%以上（420+分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考390分可申请',
    gaokaoScore: 390,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '传媒、时尚设计知名',
    majors: '传媒、时尚设计、商科、计算机',
    tips: '传媒学院欧洲领先',
  },

  // ------------------- 300-400分区间（可申请的海外院校）-------------------
  {
    id: 65, name: 'University of Greenwich', chineseName: '格林威治大学', country: '英国', region: '欧洲',
    qsRank: 701, tuition: 15000, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考380分可申请',
    gaokaoScore: 380,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '建筑、商科、护理优秀',
    majors: '建筑、商科、护理、计算机',
    tips: '伦敦地区，生活便利',
  },
  {
    id: 66, name: 'University of Wolverhampton', chineseName: '伍尔弗汉普顿大学', country: '英国', region: '欧洲',
    qsRank: 801, tuition: 14000, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.0）或TOEFL 70',
    gaokaoRef: '高考370分可申请',
    gaokaoScore: 370,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '商科、计算机、汽车工程优秀',
    majors: '商科、计算机、汽车工程、设计',
    tips: '留学成本极低',
  },
  {
    id: 67, name: 'University of South Wales', chineseName: '南威尔士大学', country: '英国', region: '欧洲',
    qsRank: 401, tuition: 15000, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 75',
    gaokaoRef: '高考370分可申请',
    gaokaoScore: 370,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '工程、商科、航天优秀',
    majors: '工程、商科、航天、计算机',
    tips: '工程学院规模大',
  },
  {
    id: 68, name: 'University of Hertfordshire', chineseName: '赫特福德大学', country: '英国', region: '欧洲',
    qsRank: 601, tuition: 14500, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考365分可申请',
    gaokaoScore: 365,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '商科、影视制作、航空工程优秀',
    majors: '商科、影视制作、航空工程、计算机',
    tips: '距离伦敦近',
  },
  {
    id: 69, name: 'University of Chester', chineseName: '切斯特大学', country: '英国', region: '欧洲',
    qsRank: 1001, tuition: 13500, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 79',
    gaokaoRef: '高考360分可申请',
    gaokaoScore: 360,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '教育、旅游、酒店管理优秀',
    majors: '教育、旅游、酒店管理、商科',
    tips: '历史悠久，环境优美',
  },
  {
    id: 70, name: 'University of Bedfordshire', chineseName: '贝德福德大学', country: '英国', region: '欧洲',
    qsRank: 801, tuition: 13000, currency: 'GBP',
    requirements: '高考成绩55%以上（约385分）',
    language: 'IELTS 6.0（单项5.5）或TOEFL 75',
    gaokaoRef: '高考355分可申请',
    gaokaoScore: 355,
    path: '高考成绩直申',
    difficulty: '简单',
    features: '商科、计算机、心理学优秀',
    majors: '商科、计算机、心理学、传媒',
    tips: '留学成本极低',
  },
  {
    id: 71, name: 'Southern Institute of Technology', chineseName: '南方理工学院', country: '新西兰', region: '大洋洲',
    qsRank: 10000, tuition: 18000, currency: 'NZD',
    requirements: '高考成绩60%（约420分）或完成高二',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考350分可申请',
    gaokaoScore: 350,
    path: '高考成绩或高中成绩申请',
    difficulty: '简单',
    features: '学费极低，移民加分高',
    majors: '信息技术、商科、旅游、护理',
    tips: '新西兰移民政策宽松',
  },
  {
    id: 72, name: 'Manukau Institute of Technology', chineseName: '马努考理工学院', country: '新西兰', region: '大洋洲',
    qsRank: 10000, tuition: 19000, currency: 'NZD',
    requirements: '高考成绩或高中成绩',
    language: 'IELTS 6.0（单项5.5）或TOEFL 80',
    gaokaoRef: '高考340分可申请',
    gaokaoScore: 340,
    path: '高中成绩申请',
    difficulty: '简单',
    features: '工料测量、护理、商科优秀',
    majors: '工料测量、护理、商科、信息技术',
    tips: '奥克兰地区，学费低',
  },
  {
    id: 73, name: 'TAFE NSW', chineseName: '新南威尔士州TAFE', country: '澳大利亚', region: '大洋洲',
    qsRank: 10000, tuition: 15000, currency: 'AUD',
    requirements: '高中毕业即可',
    language: 'IELTS 5.5或TOEFL 70',
    gaokaoRef: '高考300分可申请',
    gaokaoScore: 300,
    path: '高中成绩申请',
    difficulty: '简单',
    features: 'TAFE课程实用，移民机会大',
    majors: '会计、护理、信息技术、酒店管理',
    tips: '澳洲技术移民首选',
  },
  {
    id: 74, name: 'TAFE Queensland', chineseName: '昆士兰TAFE', country: '澳大利亚', region: '大洋洲',
    qsRank: 10000, tuition: 14000, currency: 'AUD',
    requirements: '高中毕业即可',
    language: 'IELTS 5.5或TOEFL 70',
    gaokaoRef: '高考300分可申请',
    gaokaoScore: 300,
    path: '高中成绩申请',
    difficulty: '简单',
    features: '学费低，实用性强',
    majors: '旅游酒店管理、健康护理、商业',
    tips: '昆士兰州生活成本低',
  },
  {
    id: 75, name: 'Holmesglen Institute', chineseName: '霍尔姆斯格兰学院', country: '澳大利亚', region: '大洋洲',
    qsRank: 10000, tuition: 15000, currency: 'AUD',
    requirements: '高中毕业即可',
    language: 'IELTS 5.5或TOEFL 70',
    gaokaoRef: '高考300分可申请',
    gaokaoScore: 300,
    path: '高中成绩申请',
    difficulty: '简单',
    features: 'TAFE课程丰富，升学通道好',
    majors: '商业、信息技术、酒店管理、设计',
    tips: '可衔接大学本科',
  },
]

// 组件类型
type Page = 'home' | 'score' | 'recommend' | 'subjects' | 'overseas' | 'my'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [userScore, setUserScore] = useState<number | null>(null)
  const [userRank, setUserRank] = useState<number | null>(null)
  const [score, setScore] = useState<string>('')
  const [rank, setRank] = useState<string>('')
  const [selectedProvince, setSelectedProvince] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [favorites, setFavorites] = useState<number[]>([])
  const [myApplications, setMyApplications] = useState<any[]>([])
  const [expandedCombo, setExpandedCombo] = useState<number | null>(null)
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null)
  const [overseasRegion, setOverseasRegion] = useState<string>('all')
  const [overseasDiff, setOverseasDiff] = useState<string>('all')
  const [expandedOverseas, setExpandedOverseas] = useState<number | null>(null)

  // 分数查询处理
  const handleScoreSubmit = (score: number, rank: number) => {
    setUserScore(score)
    setUserRank(rank)
    setCurrentPage('recommend')
  }

  // 智能推荐院校（国内+海外）
  const getRecommendedSchools = () => {
    if (!userScore) return { rush: [], stable: [], safe: [], overseas: [] }

    const filtered = universities.filter(u => {
      if (selectedProvince !== 'all' && u.province !== selectedProvince) return false
      if (selectedCategory !== 'all' && u.category !== selectedCategory) return false
      return true
    })

    // 高考分数分段逻辑
    // 冲刺：录取线 >= 用户分数（冲一冲有可能考上）
    // 稳妥：录取线在用户分数-25到用户分数之间（比较稳妥）
    // 保底：录取线低于用户分数-25（肯定能考上，用来保底）
    let rush: any[] = [], stable: any[] = [], safe: any[] = []
    
    if (userScore < 450) {
      // 专科段：分数低于450分，推荐专科院校
      // 冲刺：专科线附近（用户分数到用户分数+30）
      rush = filtered.filter(u => u.minScore >= userScore! && u.minScore <= userScore! + 30).slice(0, 15)
      // 稳妥：略低于专科线（用户分数-30到用户分数）
      stable = filtered.filter(u => u.minScore >= Math.max(100, userScore! - 30) && u.minScore < userScore!).slice(0, 15)
      // 保底：远低于专科线（100分以下）
      safe = filtered.filter(u => u.minScore < Math.max(100, userScore! - 30)).slice(0, 10)
    } else if (userScore < 500) {
      // 本科二批段
      // 冲刺：二本线附近或略高于用户分数
      rush = filtered.filter(u => u.minScore >= userScore! && u.minScore <= userScore! + 25).slice(0, 12)
      // 稳妥：分数略低于用户分数（用户分数-25到用户分数）
      stable = filtered.filter(u => u.minScore >= userScore! - 25 && u.minScore < userScore!).slice(0, 15)
      // 保底：分数明显低于用户分数（用户分数-25以下）
      safe = filtered.filter(u => u.minScore < userScore! - 25 && u.minScore >= 200).slice(0, 10)
    } else if (userScore < 550) {
      // 本科一批线下段（450-550分）
      // 冲刺：一本线附近或略高于用户分数
      rush = filtered.filter(u => u.minScore >= userScore! && u.minScore <= userScore! + 20).slice(0, 12)
      // 稳妥：分数略低于用户分数（用户分数-30到用户分数）
      stable = filtered.filter(u => u.minScore >= userScore! - 30 && u.minScore < userScore!).slice(0, 15)
      // 保底：分数明显低于用户分数（用户分数-30以下）
      safe = filtered.filter(u => u.minScore < userScore! - 30 && u.minScore >= 350).slice(0, 12)
    } else {
      // 本科一批段（550分以上）
      // 冲刺：录取线高于或等于用户分数
      rush = filtered.filter(u => u.minScore >= userScore!).slice(0, 12)
      // 稳妥：录取线低于用户分数但在30分以内（用户分数-30到用户分数）
      stable = filtered.filter(u => u.minScore >= userScore! - 30 && u.minScore < userScore!).slice(0, 15)
      // 保底：录取线明显低于用户分数（用户分数-30以下）
      safe = filtered.filter(u => u.minScore < userScore! - 30).slice(0, 15)
    }

    // 海外院校推荐 - 根据高考分数段
    const overseas: any[] = []
    overseasUniversities.forEach(school => {
      // 将海外院校的录取标准转换为国内分数等效
      const threshold = school.gaokaoScore || 0
      if (userScore! >= threshold - 30) {
        overseas.push({
          ...school,
          minScore: school.gaokaoScore,
          isOverseas: true,
          type: school.country,
        })
      }
    })
    // 按分数排序，取前6所
    overseas.sort((a, b) => (b.gaokaoScore || 0) - (a.gaokaoScore || 0))
    const filteredOverseas = overseas.slice(0, 6)

    return { rush, stable, safe, overseas: filteredOverseas }
  }

  // 切换收藏
  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  // 添加到志愿表
  const addToApplication = (school: any) => {
    if (!myApplications.find(a => a.id === school.id)) {
      setMyApplications([...myApplications, school])
    }
  }

  // 渲染导航栏
  const renderNav = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎓</span>
            <span className="font-bold text-xl">高考志愿帮</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {[
              { key: 'home', label: '首页', icon: '🏠' },
              { key: 'score', label: '分数查询', icon: '📊' },
              { key: 'recommend', label: '智能推荐', icon: '✨' },
              { key: 'subjects', label: '选科中心', icon: '📚' },
              { key: 'overseas', label: '海外院校', icon: '🌍' },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key as Page)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.key
                    ? 'bg-white/20 text-white'
                    : 'text-blue-100 hover:bg-white/10'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  // 渲染首页
  const renderHome = () => (
    <div className="space-y-8">
      {/* Hero区域 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          智能高考志愿填报平台
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          涵盖全国31省市 · 205+所高校 · 海外18所顶尖名校 · 2025年最新数据
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage('score')}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            开始填报
          </button>
          <button
            onClick={() => setCurrentPage('subjects')}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition border border-blue-200"
          >
            了解选科
          </button>
        </div>
      </div>

      {/* 快速入口 */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { icon: '🔍', title: '分数查大学', desc: '输入分数查院校', page: 'score' },
          { icon: '🤖', title: '智能推荐', desc: 'AI推荐志愿', page: 'recommend' },
          { icon: '📋', title: '选科规划', desc: '12种组合分析', page: 'subjects' },
          { icon: '✈️', title: '海外院校', desc: 'QS排名名校', page: 'overseas' },
        ].map(item => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page as Page)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left border border-gray-100"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-semibold text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500">{item.desc}</div>
          </button>
        ))}
      </div>

      {/* 数据概览 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">📈 2025年数据概览</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">205+</div>
            <div className="text-gray-600">收录高校</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">31</div>
            <div className="text-gray-600">省份覆盖</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-gray-600">选科组合</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">18</div>
            <div className="text-gray-600">海外名校</div>
          </div>
        </div>
      </div>
    </div>
  )

  // 渲染分数查询页
  const renderScore = () => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">🎯 输入高考成绩</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                高考分数（总分750分）
              </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="请输入您的分数"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                省排名（可选，用于更精准推荐）
              </label>
              <input
                type="number"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                placeholder="请输入您的全省排名"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            <button
              onClick={() => handleScoreSubmit(parseInt(score), parseInt(rank) || 0)}
              disabled={!score}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              开始智能推荐
            </button>
          </div>

          {/* 历年分数线查询 */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">📊 历年分数线查询</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <select
                className="px-4 py-2 border rounded-lg"
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value="all">全部省份</option>
                <option value="北京">北京市</option>
                <option value="上海">上海市</option>
                <option value="天津">天津市</option>
                <option value="重庆">重庆市</option>
                <option value="河北">河北省</option>
                <option value="山西">山西省</option>
                <option value="辽宁">辽宁省</option>
                <option value="吉林">吉林省</option>
                <option value="黑龙江">黑龙江省</option>
                <option value="江苏">江苏省</option>
                <option value="浙江">浙江省</option>
                <option value="安徽">安徽省</option>
                <option value="福建">福建省</option>
                <option value="江西">江西省</option>
                <option value="山东">山东省</option>
                <option value="河南">河南省</option>
                <option value="湖北">湖北省</option>
                <option value="湖南">湖南省</option>
                <option value="广东">广东省</option>
                <option value="海南">海南省</option>
                <option value="四川">四川省</option>
                <option value="贵州">贵州省</option>
                <option value="云南">云南省</option>
                <option value="陕西">陕西省</option>
                <option value="甘肃">甘肃省</option>
                <option value="青海">青海省</option>
                <option value="内蒙古">内蒙古</option>
                <option value="广西">广西</option>
                <option value="西藏">西藏</option>
                <option value="宁夏">宁夏</option>
                <option value="新疆">新疆</option>
              </select>
              <select
                className="px-4 py-2 border rounded-lg"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">全部批次</option>
                <option value="本科一批">本科一批</option>
                <option value="本科二批">本科二批</option>
                <option value="专科">专科/高职</option>
              </select>
            </div>

            <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
              {universities
                .filter(u => selectedProvince === 'all' || u.province === selectedProvince)
                .filter(u => selectedCategory === 'all' || u.category === selectedCategory)
                .slice(0, 20)
                .map(u => (
                  <div key={u.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{u.name}</div>
                      <div className="text-sm text-gray-500">{u.province} · {u.city} · {u.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{u.minScore}分</div>
                      <div className="text-xs text-gray-500">排名 {u.minRank}+</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 渲染智能推荐页
  const renderRecommend = () => {
    const { rush, stable, safe, overseas } = getRecommendedSchools()

    const DomesticCard = ({ school, type }: { school: any, type: string }) => (
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-bold text-lg">{school.name}</h4>
            <div className="text-sm text-gray-500">{school.province} · {school.city} · {school.type}</div>
          </div>
          <button
            onClick={() => toggleFavorite(school.id)}
            className="text-2xl"
          >
            {favorites.includes(school.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <span className={`px-2 py-1 rounded ${
              type === 'rush' ? 'bg-red-100 text-red-700' :
              type === 'stable' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {type === 'rush' ? '冲刺' : type === 'stable' ? '稳妥' : '保底'}
            </span>
          </div>
          <div className="text-right">
            <div className="font-bold">{school.minScore}分</div>
            <div className="text-xs text-gray-500">排名 {school.minRank}+</div>
          </div>
        </div>
        <button
          onClick={() => addToApplication(school)}
          className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
        >
          + 添加到志愿表
        </button>
      </div>
    )

    const OverseasCard = ({ school }: { school: any }) => (
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md p-4 hover:shadow-lg transition border border-emerald-200">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-lg">{school.name}</h4>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded">海外</span>
            </div>
            <div className="text-sm text-gray-500">{school.chineseName} · {school.country}</div>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded font-semibold">QS #{school.qsRank}</span>
        </div>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">高考成绩参考:</span>
            <span className="font-semibold text-emerald-700">{school.gaokaoRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">学费:</span>
            <span className="font-medium">{school.tuition.toLocaleString()} {school.currency}/年</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">语言要求:</span>
            <span className="text-gray-700">{school.language}</span>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage('overseas')}
          className="w-full mt-3 bg-emerald-100 text-emerald-700 py-2 rounded-lg text-sm font-medium hover:bg-emerald-200 transition"
        >
          查看详情 & 申请要求
        </button>
      </div>
    )

    const SchoolCard = ({ school, type }: { school: any, type: string }) => (
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-bold text-lg">{school.name}</h4>
            <div className="text-sm text-gray-500">{school.province} · {school.city} · {school.type}</div>
          </div>
          <button
            onClick={() => toggleFavorite(school.id)}
            className="text-2xl"
          >
            {favorites.includes(school.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">
            <span className={`px-2 py-1 rounded ${
              type === 'rush' ? 'bg-red-100 text-red-700' :
              type === 'stable' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {type === 'rush' ? '冲刺' : type === 'stable' ? '稳妥' : '保底'}
            </span>
          </div>
          <div className="text-right">
            <div className="font-bold">{school.minScore}分</div>
            <div className="text-xs text-gray-500">排名 {school.minRank}+</div>
          </div>
        </div>
        <button
          onClick={() => addToApplication(school)}
          className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
        >
          + 添加到志愿表
        </button>
      </div>
    )

    return (
      <div className="space-y-8">
        {/* 用户分数信息 */}
        {userScore && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-blue-100">您的分数</div>
                <div className="text-4xl font-bold">{userScore}分</div>
                {userRank && userRank > 0 && <div className="text-blue-100">全省排名: {userRank}+</div>}
              </div>
              <button
                onClick={() => setCurrentPage('score')}
                className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
              >
                修改分数
              </button>
            </div>
          </div>
        )}

        {/* 筛选 */}
        <div className="flex gap-4 flex-wrap">
          <select
            className="px-4 py-2 border rounded-lg"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="all">全部省份</option>
            <option value="北京">北京市</option>
            <option value="天津">天津市</option>
            <option value="河北">河北省</option>
            <option value="山西">山西省</option>
            <option value="内蒙古">内蒙古自治区</option>
            <option value="辽宁">辽宁省</option>
            <option value="吉林">吉林省</option>
            <option value="黑龙江">黑龙江省</option>
            <option value="上海">上海市</option>
            <option value="江苏">江苏省</option>
            <option value="浙江">浙江省</option>
            <option value="安徽">安徽省</option>
            <option value="福建">福建省</option>
            <option value="江西">江西省</option>
            <option value="山东">山东省</option>
            <option value="河南">河南省</option>
            <option value="湖北">湖北省</option>
            <option value="湖南">湖南省</option>
            <option value="广东">广东省</option>
            <option value="广西">广西壮族自治区</option>
            <option value="海南">海南省</option>
            <option value="重庆">重庆市</option>
            <option value="四川">四川省</option>
            <option value="贵州">贵州省</option>
            <option value="云南">云南省</option>
            <option value="西藏">西藏自治区</option>
            <option value="陕西">陕西省</option>
            <option value="甘肃">甘肃省</option>
            <option value="青海">青海省</option>
            <option value="宁夏">宁夏回族自治区</option>
            <option value="新疆">新疆维吾尔自治区</option>
            <option value="台湾">台湾省</option>
            <option value="香港">香港特别行政区</option>
            <option value="澳门">澳门特别行政区</option>
          </select>
          <select
            className="px-4 py-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">全部批次</option>
            <option value="本科一批">本科一批</option>
            <option value="本科二批">本科二批</option>
            <option value="本科三批">本科三批</option>
            <option value="专科">专科/高职</option>
          </select>
        </div>

        {/* 冲刺院校 */}
        {rush.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-red-500 mr-2">🔥</span>
              冲刺院校 (分数略低于往年)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rush.map(school => (
                <SchoolCard key={school.id} school={school} type="rush" />
              ))}
            </div>
          </div>
        )}

        {/* 稳妥院校 */}
        {stable.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              稳妥院校 (分数匹配)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stable.map(school => (
                <SchoolCard key={school.id} school={school} type="stable" />
              ))}
            </div>
          </div>
        )}

        {/* 保底院校 */}
        {safe.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-green-500 mr-2">🛡️</span>
              保底院校 (分数高于往年)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {safe.map(school => (
                <SchoolCard key={school.id} school={school} type="safe" />
              ))}
            </div>
          </div>
        )}

        {/* 海外院校推荐 - 高考分数可申请的海外名校 */}
        {overseas.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-emerald-500 mr-2">🌍</span>
              海外院校推荐 (高考分数可申请)
            </h3>
            <p className="text-sm text-gray-500 mb-4">以下海外名校接受中国高考成绩申请，您的分数可达到其录取标准：</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {overseas.map(school => (
                <OverseasCard key={school.id} school={school} />
              ))}
            </div>
          </div>
        )}

        {!userScore && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">请先输入高考分数</h3>
            <button
              onClick={() => setCurrentPage('score')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              去输入分数
            </button>
          </div>
        )}
      </div>
    )
  }

  // 渲染选科中心
  const renderSubjects = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">📚 新高考选科中心（2025版）</h2>
        <p className="text-purple-100">3+1+2 模式 · 12种选科组合 · 各分数段可报专业详情</p>
      </div>

      {/* 选科说明 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-4">🎓 什么是 "3+1+2" 模式？</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-gray-600">必考：语文、数学、外语</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-gray-600">首选：物理或历史（2选1）</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">2</div>
            <div className="text-gray-600">再选：化、生、政、地（4选2）</div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800">
          ⚠️ <strong>2025年新政重要变化：</strong>理工农医类专业95%以上要求"物化绑定"（同时选物理+化学），建议有意学医学或工科的同学优先考虑"物化生"或"物化政"组合。
        </div>
      </div>

      {/* 12种组合 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-2">📋 12种选科组合 · 各分数段可报专业（含简介）</h3>
        <p className="text-sm text-gray-500 mb-4">点击卡片展开详细对照表，点击专业名称可查看专业介绍</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectCombinations.map(combo => (
            <div
              key={combo.id}
              onClick={() => setExpandedCombo(expandedCombo === combo.id ? null : combo.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                expandedCombo === combo.id 
                  ? 'border-purple-400 bg-purple-50 ring-2 ring-purple-200'
                  : combo.popular
                    ? 'border-blue-300 bg-blue-50 hover:border-blue-400'
                    : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-lg">{combo.name}</h4>
                  <div className="text-sm text-gray-600">
                    首选: {combo.first} · 再选: {combo.second.join('、')}
                  </div>
                </div>
                <div className={`text-xl font-bold ${
                  combo.coverage >= 90 ? 'text-green-600' :
                  combo.coverage >= 70 ? 'text-yellow-600' : 'text-red-500'
                }`}>
                  {combo.coverage}%
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                📌 {combo.direction}
              </div>
              {combo.popular && (
                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  热门组合
                </span>
              )}
              
              {/* 展开详情 - 分数段对应专业+学校 */}
              {expandedCombo === combo.id && (
                <div className="mt-4 pt-4 border-t border-purple-200" onClick={e => e.stopPropagation()}>
                  <h5 className="font-semibold text-sm mb-3 text-purple-700">📊 各分数段可报学校及专业：</h5>
                  <div className="space-y-3">
                    {combo.majorsByScore.map((item, idx) => (
                      <div key={idx} className={`p-3 rounded-lg text-xs ${
                        idx === 0 ? 'bg-red-50 border border-red-200' :
                        idx === 1 ? 'bg-orange-50 border border-orange-200' :
                        idx === 2 ? 'bg-yellow-50 border border-yellow-200' :
                        idx === 3 ? 'bg-green-50 border border-green-200' :
                        'bg-blue-50 border border-blue-200'
                      }`}>
                        <div className={`font-semibold mb-2 ${
                          idx === 0 ? 'text-red-700' :
                          idx === 1 ? 'text-orange-700' :
                          idx === 2 ? 'text-yellow-700' :
                          idx === 3 ? 'text-green-700' :
                          'text-blue-700'
                        }`}>🎯 {item.range}</div>
                        {/* 推荐学校 */}
                        <div className="mb-2">
                          <span className="font-medium text-gray-600">🏫 推荐学校：</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.schools.slice(0, 6).map((school: string, sidx: number) => (
                              <span key={sidx} className="px-2 py-0.5 bg-white rounded border text-gray-700">{school}</span>
                            ))}
                            {item.schools.length > 6 && <span className="text-gray-500">等{item.schools.length}所</span>}
                          </div>
                        </div>
                        {/* 可报专业（可点击查看介绍） */}
                        <div>
                          <span className="font-medium text-gray-600">📚 可报专业：</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.majors.map((major: string, midx: number) => {
                              const desc = majorDescriptions[major]
                              const isActive = selectedMajor === major
                              return (
                                <span
                                  key={midx}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedMajor(isActive ? null : major)
                                  }}
                                  className={`px-2 py-0.5 rounded text-xs cursor-pointer transition ${
                                    isActive
                                      ? 'bg-purple-200 border border-purple-400 text-purple-800 font-semibold'
                                      : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-300 hover:text-purple-700'
                                  }`}
                                  title={desc ? '点击查看专业介绍' : '暂无介绍'}
                                >
                                  {major}
                                </span>
                              )
                            })}
                          </div>
                          {/* 专业简介提示 */}
                          <div className="text-xs text-gray-400 mt-1">
                            💡 点击专业名称查看简介
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-2 bg-gray-50 rounded-lg text-xs text-gray-500">
                    <span className="font-medium">⛔ 受限专业：</span>{combo.blockedMajors.join('、')}
                  </div>
                  {/* 专业简介详情面板 */}
                  {selectedMajor && majorDescriptions[selectedMajor] && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-purple-800">📖 专业介绍：{selectedMajor}</h5>
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedMajor(null) }}
                          className="text-purple-400 hover:text-purple-600 text-xs"
                        >
                          ✕ 关闭
                        </button>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {majorDescriptions[selectedMajor]}
                      </p>
                    </div>
                  )}
                  {selectedMajor && !majorDescriptions[selectedMajor] && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-400">
                      该专业暂无详细介绍，你可搜索" {selectedMajor} 就业方向"了解更多。
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 选科建议 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold mb-4">💡 2025年选科核心建议</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
            <span className="text-2xl">🔥</span>
            <div>
              <div className="font-semibold text-red-800">物化绑定新政（2025年起）</div>
              <div className="text-sm text-gray-600">95%的理工农医类专业要求同时选<strong>物理+化学</strong>。如有志于工科/医学，"物化生"或"物化政"是最保险的选择。</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
            <span className="text-2xl">🎯</span>
            <div>
              <div className="font-semibold">明确专业方向</div>
              <div className="text-sm text-gray-600">提前了解目标专业的选科要求，点击上方组合卡片查看各分数段可报专业，避免高三被动</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <span className="text-2xl">⚖️</span>
            <div>
              <div className="font-semibold">平衡兴趣与能力</div>
              <div className="text-sm text-gray-600">选择自己感兴趣且有优势的学科，赋分制下选择"竞争小的科目"同样重要</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
            <span className="text-2xl">📊</span>
            <div>
              <div className="font-semibold">关注赋分制影响</div>
              <div className="text-sm text-gray-600">新高考再选科目采用赋分制，建议选择本省选考人数适中、竞争强度匹配自身水平的科目</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // 渲染海外院校页
  const renderOverseas = () => {
    const filteredOverseas = overseasUniversities.filter(s => {
      if (overseasRegion !== 'all' && s.region !== overseasRegion) return false
      if (overseasDiff !== 'all' && s.difficulty !== overseasDiff) return false
      return true
    })

    const diffColor = (d: string) => {
      if (d === '极难') return 'bg-red-100 text-red-700'
      if (d === '难') return 'bg-orange-100 text-orange-700'
      if (d === '较难') return 'bg-yellow-100 text-yellow-700'
      return 'bg-green-100 text-green-700'
    }

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">🌍 海外顶尖院校（2025申请指南）</h2>
          <p className="text-emerald-100">QS世界排名 · 按高考分数段申请专业对照 · 申请条件 · 申请建议</p>
        </div>

        {/* 高考分数对应说明 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-3">📊 高考成绩与海外留学路径对照</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="font-semibold text-red-700 mb-1">650分以上（省前1%）</div>
              <div className="text-gray-600">可申请：牛津/剑桥/港大直申、斯坦福/哈佛/MIT（需+SAT）</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="font-semibold text-orange-700 mb-1">620-650分（省前3%）</div>
              <div className="text-gray-600">可申请：帝国理工、香港中文/科技大学、多伦多大学直申</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="font-semibold text-yellow-700 mb-1">590-620分（省前5%）</div>
              <div className="text-gray-600">可申请：新加坡国立大学、南洋理工大学、爱丁堡大学</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="font-semibold text-green-700 mb-1">550-590分（省前15%）</div>
              <div className="text-gray-600">可申请：多伦多大学、UBC、墨尔本/悉尼大学、UCL（部分专业）</div>
            </div>
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
            ℹ️ 以上为参考数据，实际录取取决于综合实力（语言、竞赛、活动背景等），不同省份同分排名不同。建议同时准备语言考试（雅思/托福）。
          </div>
        </div>

        {/* 筛选 */}
        <div className="flex gap-4 flex-wrap">
          <select
            className="px-4 py-2 border rounded-lg"
            value={overseasRegion}
            onChange={e => setOverseasRegion(e.target.value)}
          >
            <option value="all">全部地区</option>
            <option value="北美">北美（美国/加拿大）</option>
            <option value="欧洲">欧洲（英国/瑞士）</option>
            <option value="亚洲">亚洲（新加坡/香港）</option>
            <option value="大洋洲">大洋洲（澳大利亚）</option>
          </select>
          <select
            className="px-4 py-2 border rounded-lg"
            value={overseasDiff}
            onChange={e => setOverseasDiff(e.target.value)}
          >
            <option value="all">全部难度</option>
            <option value="极难">极难（省前1%）</option>
            <option value="难">难（省前2-3%）</option>
            <option value="较难">较难（省前5-10%）</option>
            <option value="中等">中等（省前15%+）</option>
          </select>
        </div>

        {/* 院校列表 */}
        <div className="space-y-4">
          {filteredOverseas.map(school => (
            <div key={school.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              {/* 主要信息行 */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedOverseas(expandedOverseas === school.id ? null : school.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className="font-bold text-xl">{school.name}</h4>
                      <span className="text-gray-600 font-medium">{school.chineseName}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded font-semibold">
                        QS #{school.qsRank}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded font-semibold ${diffColor(school.difficulty)}`}>
                        {school.difficulty}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600 mb-2 flex-wrap">
                      <span>🌍 {school.country}</span>
                      <span>💰 学费: {school.tuition.toLocaleString()} {school.currency}/年</span>
                      <span>📚 语言: {school.language}</span>
                    </div>
                    {/* 高考分数参考标签 */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium">
                        🎓 高考参考: {school.gaokaoRef}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={e => { e.stopPropagation(); toggleFavorite(school.id) }}
                      className="text-2xl"
                    >
                      {favorites.includes(school.id) ? '❤️' : '🤍'}
                    </button>
                    <span className="text-gray-400 text-sm">{expandedOverseas === school.id ? '▲ 收起' : '▼ 详情'}</span>
                  </div>
                </div>
              </div>

              {/* 展开详情 */}
              {expandedOverseas === school.id && (
                <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="font-semibold text-sm text-gray-700 mb-1">📋 学术申请要求</div>
                        <div className="text-sm text-gray-600">{school.requirements}</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="font-semibold text-sm text-gray-700 mb-1">🛣️ 申请路径</div>
                        <div className="text-sm text-gray-600">{school.path}</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="font-semibold text-sm text-gray-700 mb-1">🎓 优势专业</div>
                        <div className="text-sm text-gray-600">{school.majors}</div>
                      </div>
                      {/* 按分数段显示专业申请详情 */}
                      {school.majorsByScore && (
                        <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                          <div className="font-semibold text-sm text-indigo-700 mb-2">📊 按高考分数段申请专业对照</div>
                          <div className="space-y-2">
                            {school.majorsByScore.map((tier: any, idx: number) => (
                              <div key={idx} className="bg-white rounded-lg p-2 text-xs border border-indigo-100">
                                <div className="flex items-start gap-2">
                                  <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                                    idx === 0 ? 'bg-red-100 text-red-700' :
                                    idx === 1 ? 'bg-orange-100 text-orange-700' :
                                    'bg-yellow-100 text-yellow-700'
                                  }`}>{tier.range}</span>
                                  <span className="text-indigo-700 font-medium">需满足：{tier.requirement}</span>
                                </div>
                                <div className="mt-1">
                                  <span className="text-gray-500">可申专业：</span>
                                  <span className="text-gray-800">{tier.majors.join(' · ')}</span>
                                </div>
                                <div className="mt-1 text-indigo-600 italic">💡 {tier.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border">
                        <div className="font-semibold text-sm text-gray-700 mb-1">✨ 学校特色</div>
                        <div className="text-sm text-gray-600">{school.features}</div>
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="font-semibold text-sm text-indigo-700 mb-1">💡 申请小贴士</div>
                        <div className="text-sm text-indigo-900">{school.tips}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 留学通用提醒 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold mb-4">📌 留学申请通用建议</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="font-semibold mb-1">⏰ 申请时间线</div>
              <div className="text-gray-600">高考后6月底确认成绩 → 7-8月准备语言考试 → 9-11月提交申请 → 次年1-4月收录取通知</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="font-semibold mb-1">📝 必备材料</div>
              <div className="text-gray-600">高考成绩/成绩单 · 语言成绩（雅思/托福）· 个人陈述 · 推荐信 · 竞赛/活动证明</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="font-semibold mb-1">💰 奖学金</div>
              <div className="text-gray-600">香港高校提供大量针对内地生奖学金；新加坡政府奖学金竞争激烈；英美多有Need-Based助学金</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-semibold mb-1">🌐 留学路径选择</div>
              <div className="text-gray-600">高考直申（香港/新加坡/英国最友好）· SAT/ACT路径（美国）· 预科路径（适合英语不足者）</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderNav()}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'score' && renderScore()}
        {currentPage === 'recommend' && renderRecommend()}
        {currentPage === 'subjects' && renderSubjects()}
        {currentPage === 'overseas' && renderOverseas()}
      </main>

      {/* 底部 */}
      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 高考志愿帮 - 助力每一位考生的升学之路</p>
          <p className="text-sm mt-2">数据仅供参考，请以官方信息为准</p>
        </div>
      </footer>
    </div>
  )
}

export default App
