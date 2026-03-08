# Session: photography-color-grading
## Learner Profile
- Level: intermediate
- Language: zh
- Started: 2026-03-08

## Concept Map
| # | Concept | Prerequisites | Status | Score | Last Reviewed | Review Interval |
|---|---------|---------------|--------|-------|---------------|-----------------|
| 1 | 色彩互补原理 (Complementary Colors) | - | mastered | 100% | 2026-03-08 | 1d |
| 2 | RGB 曲线的高级应用 (Advanced RGB Curves) | 1 | mastered | 100% | 2026-03-08 | 1d |
| 3 | 色彩校准 (Camera Calibration) | 1 | mastered | 90% | 2026-03-08 | 1d |
| 4 | 色彩分级 (Split Toning) | 1, 2 | mastered | 100% | 2026-03-08 | 1d |
| 5 | 局部调色 (Local Masking) | 1, 2 | mastered | 100% | 2026-03-08 | 1d |

## Misconceptions
| # | Concept | Misconception | Root Cause | Status | Counter-Example Used |
|---|---------|---------------|------------|--------|---------------------|
| 1 | 色彩校准 | "校准和 HSL 一样只影响特定颜色" | 混淆了“特定颜色的范围”与“底层通道定义”的区别 | resolved | 像素配方解释 (HSL=挑菜, Calibration=改基因) |
| 2 | 色彩分级 | "中间调加绿只是让画面变绿" | 不清楚中间调对肤色的决定性作用 | resolved | 修复偏紫肤色的案例 |
| 3 | 色彩校准 | "蓝原色左移会自动让肤色变红" | 忽略了混合原理：蓝左移(->青)会让所有含蓝/白的颜色(包括皮肤)偏绿 | resolved | 校准模拟器实测：蓝左移->肤色变绿->需红右移补偿 |
| 4 | 色彩校准 | "动一个原色，其他两个原色也会动" | 混淆了“原色定义移动”与“混合结果改变” | resolved | 三角扭曲视觉化：蓝点动，红绿点不动，但连接它们的品红/青色线变形了 |

## Session Log
- 2026-03-08 Diagnosed level: intermediate.
- 2026-03-08 Concept 1: mastered.
- 2026-03-08 Concept 2: mastered.
- 2026-03-08 Concept 3: mastered.
- 2026-03-08 Concept 4: mastered.
- 2026-03-08 Concept 5: mastered. User correctly identified contrast recovery as key to natural local adjustments.
- 2026-03-08 Review: Created interactive visual `calibration-simulator.html` to demonstrate color opponent theory in Calibration panel.
- 2026-03-08 Misconception detected: User noticed simulation showed skin turning green, not red. Corrected the explanation: Red shift is a manual compensation, not automatic.
- 2026-03-08 Visual: Created `gamut-warp.html` to show the "Elastic Triangle" model, clarifying that primary points are independent but the "fabric" between them (mixed colors) stretches/compresses.
