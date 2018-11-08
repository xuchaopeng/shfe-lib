// 添加样式依赖
import '@/common/css/index.scss';
import './about.scss';
// 添加js依赖
import $ from 'zepto-webpack';
import { log } from './js/other';

log();

console.log('$ = ', $);
