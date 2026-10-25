# 四大客户选择、意见预测与退出：报告日后三年检验

三项均已执行 Stata，输出独立保存；未修改主报告、正式数据或原有估计。系数和标准误保留概率原单位，不乘100。星号：* p<0.10、** p<0.05、*** p<0.01，按未舍入p值判断。

## 共同时间口径与数据

- 截止日：该财年审计报告的签署日期；不是实际聘任公告日，也不保证是报告公开日。
- 窗口：截止日之后至三年后的同一日，右端包含。
- 历史问题：问题所属财年不晚于该报告财年，并在窗口内首次合格公告。
- 后来披露的问题：不限制所属财年；因此可能包含四大服务之后财年的问题，不能解释为纯粹事前质量。
- “首次”按公司×问题所属财年×定义取最早合格公告；无法区分同一财年多个独立问题，不将重复公告记作首次暴露。
- 重述沿用逐条记录的 Strict、Fin、Raw 标记；违规沿用现有全部违规口径。
- 按两库共同覆盖选择完整三年窗口；2026年数据只覆盖部分年度，保守截至2025-12-31。完整输入71,584公司年，共同窗口可用49,716。
- 没有有效所属财年的逐条记录排除并在 source_coverage.csv 计数；零表示该可归属记录口径下未发现命中，不表示绝对没有问题。
- 保留九项原控制及缺失标记，公司与行业×年份固定效应，公司聚类。未缩尾、未改主规格。此次没有另外加入已公告风险历史、融资或滞后GC；不能称为已排除全部公开信息。

## 1. 下一年转入四大与后来暴露的历史问题

风险集：当前非四大且下一财年审计师类型可观察；下一年四大为转入，不要求未来留任。对照是下一年仍为非四大的客户，并非要求永远非四大。回归Y为历史问题，X为下一年四大指示和原九项控制。最终45,494公司年、4,179公司簇；247个转入公司年、45,247个未转入公司年。

| 结果 | 下一年转入四大系数 | 标准误 | p值 |
|---|---:|---:|---:|
| Strict 历史重述 | 0.001718 | 0.010701 | 0.872462 |
| Fin 历史重述 | 0.005775 | 0.018687 | 0.757294 |
| Raw 历史重述 | 0.014199 | 0.026210 | 0.588027 |
| 历史违规 | -0.017165* | 0.010175 | 0.091670 |

历史违规较少，仅达到10%水平；历史重述没有显著差异。结果与部分事前风险选择一致，尚不足以确认不可观察信息筛选。后任审计师可能改变历史问题的发现，报告日代理也可能晚于实际聘任决定。

## 2. MAO／GC的后续风险预测与四大差异

回归包含 Big4、意见、Big4×意见及原九项控制。下面的“非四大意见关系”是意见主项，“四大意见关系”是主项与交互之和，“四大−非四大”是交互项，用完整公司聚类协方差矩阵推断。最终49,049公司年、4,390公司簇；MAO四大67、非四大2,860公司年，GC四大35、非四大1,529公司年。

| 意见 | 结果 | 非四大意见关系 | p值 | 四大意见关系 | p值 | 四大−非四大 | 标准误 | p值 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| MAO | Strict 后来披露的重述 | 0.078281*** | <0.000001 | 0.114827** | 0.029271 | 0.036545 | 0.052862 | 0.489393 |
| MAO | Fin 后来披露的重述 | 0.085909*** | <0.000001 | 0.133501** | 0.033035 | 0.047593 | 0.063578 | 0.454156 |
| MAO | Raw 后来披露的重述 | 0.059876*** | 0.000022 | 0.223363*** | 0.003884 | 0.163487** | 0.077939 | 0.035996 |
| MAO | 后来披露的违规 | 0.103927*** | <0.000001 | 0.054890 | 0.119358 | -0.049037 | 0.036209 | 0.175711 |
| GC | Strict 后来披露的重述 | 0.020655* | 0.066108 | 0.118362 | 0.163155 | 0.097708 | 0.084812 | 0.249361 |
| GC | Fin 后来披露的重述 | 0.002799 | 0.873572 | 0.047522 | 0.601346 | 0.044722 | 0.092192 | 0.627630 |
| GC | Raw 后来披露的重述 | -0.020134 | 0.284583 | 0.212007** | 0.049337 | 0.232141** | 0.108006 | 0.031662 |
| GC | 后来披露的违规 | 0.045311*** | 0.002032 | 0.057450 | 0.311541 | 0.012139 | 0.057526 | 0.832879 |

四大的 MAO／GC 与 Raw 重述的关系显著更强；Strict／Fin的组间斜率差和违规交互未达到5%显著性。不能概括为四大意见对所有风险均更有预测力。后来发生的重述也可能是发现、纠正和报告过程的结果，不能只解释为客户原有质量。单组显著、另一组不显著不等于组间差异显著，按交互项检验判断。

## 3. 直接比较退出者与留任者

风险集：当前四大且下一年身份可观察，退出指下一年非四大，留任指下一年仍四大。先估计总体退出差异，再加入退出×MAO／GC交互；不直接截取小意见子样本改变FE。意见组内差异使用退出主项与交互之和，不是推断谁主动终止。最终2,944公司年、418公司簇；132退出、2,812留任。MAO组含19退出／30留任，GC组8退出／17留任。

| 客户范围 | 结果 | 退出−留任 | 标准误 | p值 |
|---|---|---:|---:|---:|
| 全部当前四大客户 | 后来披露的违规 | 0.024407 | 0.023212 | 0.293635 |
| 收到MAO的四大客户 | 后来披露的违规 | -0.076394 | 0.073815 | 0.301301 |
| 收到GC的四大客户 | 后来披露的违规 | 0.030799 | 0.071859 | 0.668436 |
| 全部当前四大客户 | 历史违规 | 0.035328* | 0.020630 | 0.087560 |
| 收到MAO的四大客户 | 历史违规 | 0.020316 | 0.054996 | 0.712018 |
| 收到GC的四大客户 | 历史违规 | 0.147582* | 0.080914 | 0.068877 |

MAO组退出者的后来违规点估计为负，但不显著；历史违规差异也不显著。总体退出者的历史违规更多，仅10%显著。现有直接检验不支持把“未来更不可能违规的客户反而离开”写成已确认事实；也不能确认退出等于剔除坏客户。退出是事后状态，固定三年窗口可能包含退出之前的披露，因此不是退出的因果效应，也不是“退出后才发生”的检验。

## 核验与复现

已核对三个完成标记、50条系数／对比记录、18个实际回归样本文件、组别与下一年身份、p值和区间。独立逐条重构320个正负事件样例通过。没有依据显著性修改日期、样本、控制或窗口。

- [prepare_big4_private_information_side.py](D:/Data/JupyterData/RA/Accounting/code/python/prepare_big4_private_information_side.py)
- [49_preexisting_quality_selection.do](D:/Data/JupyterData/RA/Accounting/code/stata/51_big4_effect/49_preexisting_quality_selection.do)
- [49_opinion_future_disclosure.do](D:/Data/JupyterData/RA/Accounting/code/stata/51_big4_effect/49_opinion_future_disclosure.do)
- [49_exit_future_disclosure.do](D:/Data/JupyterData/RA/Accounting/code/stata/51_big4_effect/49_exit_future_disclosure.do)
- [verify_big4_private_information_side.py](D:/Data/JupyterData/RA/Accounting/code/python/verify_big4_private_information_side.py)
- [design.json](D:/Data/JupyterData/RA/Accounting/data/temp/audit_quality/private_information_side/design.json)
- [source_coverage.csv](D:/Data/JupyterData/RA/Accounting/data/temp/audit_quality/private_information_side/source_coverage.csv)
- [verification.json](D:/Data/JupyterData/RA/Accounting/results/reports/audit_quality/private_information_side/verification.json)

三个结果目录分别为：

- [preexisting_quality_selection_side](D:/Data/JupyterData/RA/Accounting/results/tables/audit_quality/preexisting_quality_selection_side/estimates.csv)
- [opinion_future_disclosure_side](D:/Data/JupyterData/RA/Accounting/results/tables/audit_quality/opinion_future_disclosure_side/estimates.csv)
- [exit_future_disclosure_side](D:/Data/JupyterData/RA/Accounting/results/tables/audit_quality/exit_future_disclosure_side/estimates.csv)

日志目录：`results/logs/20261010_private_information_side/audit_quality/`。
