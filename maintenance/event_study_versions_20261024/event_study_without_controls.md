# 事件研究完整结果：无控制版（当前采用）

全部估计与绘图使用Stata。预测窗口180天；2012年前为财年2001—2011，2012年起为财年2012—2024。原Y、消息划分、窗口准入、固定效应及聚类保持不变。

本版本沿用加入三项控制之前的事件研究，不额外加入规模、MB、预测覆盖及其缺失指示；各模型原有固定效应、聚类、Y和样本规则保留。

短窗及长窗各自沿用既定样本；年度CAR同样沿用未加入这三项控制的原方程。各套模型的样本规则见对应图前说明。

[对应版本](event_study_with_controls.md) · [短窗样本及原结果复现核对](../../tables/market_event_versions_20261024/short_controls_diagnostic_20261024/validation.json)

本文件整理已完成的Stata结果，本次未重估、未重新绘图。两份MD按同一结构展示72张配对图；主报告采用无控制版本，有控制版本单独备查。路径中的current_nocontrol为历史目录名，请按本文件的版本标题识别控制口径。

## 主门槛：无控制结果

时期 | 比较 | 公告日系数（p） | +5日系数（p） | 年报数 · ---|---|---:|---:|---: · 全样本2001—2024 | 四大−非四大 | 0.002092（0.0763） | 0.001776（0.4544） | 20,408 · 全样本2001—2024 | 四大−Other | 0.003780（0.0045） | 0.003105（0.2447） | 20,408 · 全样本2001—2024 | 八大−Other | 0.002756（0.0071） | 0.002161（0.2869） | 20,408 · 2012年前2001—2011 | 四大−非四大 | 0.004839（0.0116） | 0.008210（0.0548） | 4,583 · 2012年前2001—2011 | 四大−Other | 0.005564（0.0067） | 0.009905（0.0277） | 4,583 · 2012年前2001—2011 | 八大−Other | 0.001677（0.3107） | 0.003921（0.2461） | 4,583 · 2012年起2012—2024 | 四大−非四大 | 0.000863（0.5491） | -0.000438（0.8769） | 15,825 · 2012年起2012—2024 | 四大−Other | 0.002195（0.2013） | 0.000033（0.9922） | 15,825 · 2012年起2012—2024 | 八大−Other | 0.001932（0.1527） | 0.000683（0.7957） | 15,825

主表系数为log price单位，括号为p值；按当前采用的原始价短窗口径展示三时期结果。

## 总体与事务所组内反应

Y为原始收盘价自然对数；好消息 $S>0.10$、中性 $-0.10\le S\le0.10$；完整[−5,+5]交易日，−1日为基期。各组分别估计 $\log P=FE+\sum_k b_{gk}Good\times D_k+e$；FE为公司×财年、事件日、交易日期，公司×财年聚类。

![全期：总体与三组分别估计](../../figures/market_information/event_study/current_nocontrol/positive_response_panels_180d_threshold_0p1.png)

![2012年前：总体与三组分别估计](../../figures/market_information/event_study/current_nocontrol/before2012/positive_response_panels_180d_threshold_0p1.png)

![2012年起：总体与三组分别估计](../../figures/market_information/event_study/current_nocontrol/after2012/positive_response_panels_180d_threshold_0p1.png)

## 2012年前后：四套分类与估计

Y、消息、样本和FE／聚类同上。组内图为各组分别回归；interaction图为同一受限共同回归中好消息×审计组×事件日系数的组间差，未另加审计组×事件日。区间使用完整协方差。

![组内：Big4、Local8、Other；2012年前](../../figures/market_information/event_study/period_four_sets/separate_threegroup_before2012.png)

![组内：Big4、Local8、Other；2012年起](../../figures/market_information/event_study/period_four_sets/separate_threegroup_after2012.png)

![组内：Big4、NonBig4；2012年前](../../figures/market_information/event_study/period_four_sets/separate_binary_before2012.png)

![组内：Big4、NonBig4；2012年起](../../figures/market_information/event_study/period_four_sets/separate_binary_after2012.png)

![共同回归：Big4−Other、Local8−Other；2012年前](../../figures/market_information/event_study/period_four_sets/interaction_threegroup_before2012.png)

![共同回归：Big4−Other、Local8−Other；2012年起](../../figures/market_information/event_study/period_four_sets/interaction_threegroup_after2012.png)

![共同回归：Big4−NonBig4；2012年前](../../figures/market_information/event_study/period_four_sets/interaction_binary_before2012.png)

![共同回归：Big4−NonBig4；2012年起](../../figures/market_information/event_study/period_four_sets/interaction_binary_after2012.png)

## 全期与早期：门槛和共同分位数组

Y与FE／聚类同上。共同回归为 $\log P=FE+\sum_{g,k}\beta_{gk}A_g Good D_k+e$，图画同模型系数差。threshold采用10%门槛；quartile采用共同候选事件的top25%对中间50%，分位点不按组或时期重算。

![threshold；all；binary](../../figures/market_information/event_study/baseline_comparisons/threshold/all/event_path_binary.png)

![threshold；all；threegroup](../../figures/market_information/event_study/baseline_comparisons/threshold/all/event_path_threegroup.png)

![threshold；before2012；binary](../../figures/market_information/event_study/baseline_comparisons/threshold/before2012/event_path_binary.png)

![threshold；before2012；threegroup](../../figures/market_information/event_study/baseline_comparisons/threshold/before2012/event_path_threegroup.png)

![quartile；all；binary](../../figures/market_information/event_study/baseline_comparisons/quartile/all/event_path_binary.png)

![quartile；all；threegroup](../../figures/market_information/event_study/baseline_comparisons/quartile/all/event_path_threegroup.png)

![quartile；before2012；binary](../../figures/market_information/event_study/baseline_comparisons/quartile/before2012/event_path_binary.png)

![quartile；before2012；threegroup](../../figures/market_information/event_study/baseline_comparisons/quartile/before2012/event_path_threegroup.png)

## 门槛扫描与七年滚动

门槛扫描每个门槛分别估计，图示5%—25%；7年滚动按完整财年窗口分别估计，相邻窗口重叠。Y、FE及公司×财年聚类同上。组内响应分解来自共同模型的组别系数，并非分组另做回归。

![门槛扫描；all；binary](../../figures/market_information/event_study/period_comparisons/all_binary_threshold/pooled_gap_threshold_scan_with_support.png)

![门槛扫描；all；threegroup](../../figures/market_information/event_study/period_comparisons/all_threegroup_threshold/pooled_gap_threshold_scan_with_support.png)

![门槛扫描；before2012；binary](../../figures/market_information/event_study/period_comparisons/before2012_binary_threshold/pooled_gap_threshold_scan_with_support.png)

![门槛扫描；before2012；threegroup](../../figures/market_information/event_study/period_comparisons/before2012_threegroup_threshold/pooled_gap_threshold_scan_with_support.png)

![共同模型各组的公告日好消息−中性响应；binary](../../figures/market_information/event_study/rolling_group_response/rolling_group_binary_day0.png)

![共同模型各组的公告日好消息−中性响应；threegroup](../../figures/market_information/event_study/rolling_group_response/rolling_group_threegroup_day0.png)

![rolling_threshold；binary；第+0日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_binary_day0.png)

![rolling_threshold；binary；第+1日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_binary_day1.png)

![rolling_threshold；binary；第+2日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_binary_day2.png)

![rolling_threshold；binary；第+3日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_binary_day3.png)

![rolling_threshold；threegroup；第+0日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_threegroup_day0.png)

![rolling_threshold；threegroup；第+1日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_threegroup_day1.png)

![rolling_threshold；threegroup；第+2日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_threegroup_day2.png)

![rolling_threshold；threegroup；第+3日](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_gap_threegroup_day3.png)

![rolling_threshold：各组实际样本量](../../figures/market_information/event_study/rolling_threshold/window_7/rolling_sample_counts_by_center_year.png)

![rolling_quartile；binary；第+0日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_binary_day0.png)

![rolling_quartile；binary；第+1日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_binary_day1.png)

![rolling_quartile；binary；第+2日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_binary_day2.png)

![rolling_quartile；binary；第+3日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_binary_day3.png)

![rolling_quartile；threegroup；第+0日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_threegroup_day0.png)

![rolling_quartile；threegroup；第+1日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_threegroup_day1.png)

![rolling_quartile；threegroup；第+2日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_threegroup_day2.png)

![rolling_quartile；threegroup；第+3日](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_gap_threegroup_day3.png)

![rolling_quartile：各组实际样本量](../../figures/market_information/event_study/rolling_quartile/window_7/rolling_sample_counts_by_center_year.png)

## 连续消息与年度CAR

连续模型使用全部可用消息（不限制为好消息或中性消息），完整[−5,+5]，三组完整交互及线性／分段线性消息函数。Y分别为原始log price和 $100\sum_{j=-5}^{k}AR_{ij}$（百分点，原累计变量）；事件日系数以−1日为基期。公司×财年、事件日、日期FE，公司×财年聚类。反应曲线以同日Other在S=0为共同参照。

![log_price：线性消息斜率](../../figures/market_information/event_study/continuous_interactions/linear_slopes_log_price.png)

![log_price：linear给定消息的组间差](../../figures/market_information/event_study/continuous_interactions/linear_gaps_log_price.png)

![log_price：linear相对共同零消息参照的响应](../../figures/market_information/event_study/continuous_interactions/linear_responses_log_price.png)

![log_price：spline给定消息的组间差](../../figures/market_information/event_study/continuous_interactions/spline_gaps_log_price.png)

![log_price：spline相对共同零消息参照的响应](../../figures/market_information/event_study/continuous_interactions/spline_responses_log_price.png)

![car_pct：线性消息斜率](../../figures/market_information/event_study/continuous_interactions/linear_slopes_car_pct.png)

![car_pct：linear给定消息的组间差](../../figures/market_information/event_study/continuous_interactions/linear_gaps_car_pct.png)

![car_pct：linear相对共同零消息参照的响应](../../figures/market_information/event_study/continuous_interactions/linear_responses_car_pct.png)

![car_pct：spline给定消息的组间差](../../figures/market_information/event_study/continuous_interactions/spline_gaps_car_pct.png)

![car_pct：spline相对共同零消息参照的响应](../../figures/market_information/event_study/continuous_interactions/spline_responses_car_pct.png)

年度CAR图一行一公司财年，Y为CAR[−1,0]、[−1,+1]、[−1,+2]、[−1,+3]，小数收益。公司及财年FE，公司×财年聚类；不额外加入三项控制，吸收FE固定在估计样本均值。

![年度CAR与连续消息：四个窗口](../../figures/market_information/event_study/car_surprise_response/car_surprise_firm_year_fe.png)

## 长窗累计市场调整收益

Y为 $C_{ik}=\sum_{j=-5}^{k}(r_{ij}-r_{mj})-\sum_{j=-5}^{-1}(r_{ij}-r_{mj})$；个股为含分红总收益，市场为前一交易日流通市值加权收益。保留原66日完整收益要求，以−1日归零；+60日包含公告初期收益。FE为公司×财年、事件日、日期，保持原公司聚类。

A仅好消息：$C=FE+\sum_k\theta_k Big4 D_k+e$；B含好消息与中性：$C=FE+\sum_{g,k}\beta_{gk}A_g Good D_k+e$，图画四大减非四大系数差。

![A：好消息内部](../../figures/market_information/pead_market_adjusted_paths_side/positive_only_path.png)

![B：好消息相对中性的组间差](../../figures/market_information/pead_market_adjusted_paths_side/positive_vs_neutral_path.png)

模型 | 事件日 | 系数 | 标准误 | p | 日度观测数 | 聚类数 · ---|---:|---:|---:|---:|---:|---: · A：好消息内部 | +0 | -0.000473 | 0.001505 | 0.7535 | 252,270 | 1,714 · A：好消息内部 | +5 | -0.002904 | 0.003004 | 0.3339 | 252,270 | 1,714 · A：好消息内部 | +30 | -0.007071 | 0.004937 | 0.1523 | 252,270 | 1,714 · A：好消息内部 | +60 | -0.020135 | 0.007340 | 0.0061 | 252,270 | 1,714 · B：好消息相对中性 | +0 | 0.000447 | 0.001517 | 0.7680 | 988,260 | 4,034 · B：好消息相对中性 | +5 | -0.000513 | 0.002994 | 0.8640 | 988,260 | 4,034 · B：好消息相对中性 | +30 | -0.004369 | 0.004911 | 0.3737 | 988,260 | 4,034 · B：好消息相对中性 | +60 | -0.020332 | 0.007205 | 0.0048 | 988,260 | 4,034

系数单位为小数收益；0.01代表1个百分点。

## 其余单独面板与样本量图

这些是同一套无控制结果的单独面板及样本量图。旧行情入口的三张图沿用原报告样本和公告映射；上文当前事件面板图则使用return_days与signals。两者均为原始log price、完整短窗及原固定效应和聚类。

Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/after2012/positive_response_all_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/after2012/positive_response_all_180d_threshold_0p1.png)
Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/after2012/positive_response_auditor_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/after2012/positive_response_auditor_180d_threshold_0p1.png)
Y、消息及样本沿用本节短窗口径；共同受限interaction回归，展示四大−Other和八大−Other。

![event_study/current_nocontrol/after2012/positive_response_interaction_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/after2012/positive_response_interaction_180d_threshold_0p1.png)
Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/before2012/positive_response_all_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/before2012/positive_response_all_180d_threshold_0p1.png)
Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/before2012/positive_response_auditor_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/before2012/positive_response_auditor_180d_threshold_0p1.png)
Y、消息及样本沿用本节短窗口径；共同受限interaction回归，展示四大−Other和八大−Other。

![event_study/current_nocontrol/before2012/positive_response_interaction_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/before2012/positive_response_interaction_180d_threshold_0p1.png)
Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/positive_response_all_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/positive_response_all_180d_threshold_0p1.png)
Y为原始log price；好消息与中性消息、完整[-5,+5]、-1基期；总体或事务所分别估计。

![event_study/current_nocontrol/positive_response_auditor_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/positive_response_auditor_180d_threshold_0p1.png)
Y、消息及样本沿用本节短窗口径；共同受限interaction回归，展示四大−Other和八大−Other。

![event_study/current_nocontrol/positive_response_interaction_180d_threshold_0p1.png](../../figures/market_information/event_study/current_nocontrol/positive_response_interaction_180d_threshold_0p1.png)
样本量图：对应同一门槛扫描的好消息与中性消息事件数；随门槛变化，不另做回归。

![event_study/period_comparisons/all_binary_threshold/threshold_treatment_control_counts.png](../../figures/market_information/event_study/period_comparisons/all_binary_threshold/threshold_treatment_control_counts.png)
样本量图：对应同一门槛扫描的好消息与中性消息事件数；随门槛变化，不另做回归。

![event_study/period_comparisons/all_threegroup_threshold/threshold_treatment_control_counts.png](../../figures/market_information/event_study/period_comparisons/all_threegroup_threshold/threshold_treatment_control_counts.png)
样本量图：对应同一门槛扫描的好消息与中性消息事件数；随门槛变化，不另做回归。

![event_study/period_comparisons/before2012_binary_threshold/threshold_treatment_control_counts.png](../../figures/market_information/event_study/period_comparisons/before2012_binary_threshold/threshold_treatment_control_counts.png)
样本量图：对应同一门槛扫描的好消息与中性消息事件数；随门槛变化，不另做回归。

![event_study/period_comparisons/before2012_threegroup_threshold/threshold_treatment_control_counts.png](../../figures/market_information/event_study/period_comparisons/before2012_threegroup_threshold/threshold_treatment_control_counts.png)
旧行情入口的总体或事务所分别估计：原始log price、原公告映射、完整短窗及既定固定效应和聚类。

![event_study/positive_response_all_180d_threshold_0p1.png](../../figures/market_information/event_study/positive_response_all_180d_threshold_0p1.png)
旧行情入口的总体或事务所分别估计：原始log price、原公告映射、完整短窗及既定固定效应和聚类。

![event_study/positive_response_auditor_180d_threshold_0p1.png](../../figures/market_information/event_study/positive_response_auditor_180d_threshold_0p1.png)
旧行情入口的总体或事务所分别估计：原始log price、原公告映射、完整短窗及既定固定效应和聚类。

![event_study/positive_response_panels_180d_threshold_0p1.png](../../figures/market_information/event_study/positive_response_panels_180d_threshold_0p1.png)

ERC原报告回归已有控制，本轮未重新估计ERC。本文件集中展示加入三项控制之前的事件研究。

## 完整二组交互：报告1.3.7

样本为好消息及中性消息、完整[-5,+5]；公司×财年、事件日、交易日期固定效应，公司×财年聚类。在原受限交互上增加四大×事件日，允许中性消息的四大与非四大路径不同。

$Y=FE+\sum_{k\ne-1}(a_kGood+b_kBig4+c_kGood\times Big4)D_k+e$。表中为 $c_k$。

Y包括原始log price及累计市场调整收益百分点值；后者使用原始累计变量，并以−1作为事件系数基期。

Y | 事件日 | 三重交互系数 | 标准误 | p | 日度观测数 · ---|---:|---:|---:|---:|---: · log_price | +0 | 0.000896 | 0.001458 | 0.5390 | 224,432 · log_price | +5 | -0.000396 | 0.002874 | 0.8905 | 224,432 · car_pct | +0 | 0.092550 | 0.146245 | 0.5268 | 224,432 · car_pct | +5 | 0.000602 | 0.289794 | 0.9983 | 224,432

[完整逐日系数](../../tables/market_event_versions_20261024/original_eps_integration_20261024/full_binary_coefficients.csv)

## 事前联合检验

联合检验公告前−5、−4、−3、−2日相对于−1日的响应。组内检验与共同模型组间差检验分别列示；不拒绝不等于证明没有事前变化。

时期 | 模型 | 对象 | 联合p | 日度观测数 | 聚类数 · ---|---|---|---:|---:|---: · 2012年起2012—2024 | 共同interaction | 四大−八大 | 0.2517 | 174,041 | 15,825 · 全样本2001—2024 | 共同interaction | 四大−八大 | 0.0667 | 224,432 | 20,408 · 2012年前2001—2011 | 共同interaction | 四大−八大 | 0.1152 | 50,391 | 4,583 · 2012年起2012—2024 | 共同interaction | 四大−Other | 0.9497 | 174,041 | 15,825 · 全样本2001—2024 | 共同interaction | 四大−Other | 0.0598 | 224,432 | 20,408 · 2012年前2001—2011 | 共同interaction | 四大−Other | 0.0299 | 50,391 | 4,583 · 2012年起2012—2024 | 共同interaction | 八大−Other | 0.4395 | 174,041 | 15,825 · 全样本2001—2024 | 共同interaction | 八大−Other | 0.4413 | 224,432 | 20,408 · 2012年前2001—2011 | 共同interaction | 八大−Other | 0.2826 | 50,391 | 4,583 · 2012年起2012—2024 | 组内分别估计 | 四大 | 0.8722 | 22,226 | 2,025 · 全样本2001—2024 | 组内分别估计 | 四大 | 0.4285 | 28,223 | 2,574 · 2012年前2001—2011 | 组内分别估计 | 四大 | 0.2259 | 5,997 | 549 · 2012年起2012—2024 | 组内分别估计 | 八大 | 0.6481 | 102,219 | 9,296 · 全样本2001—2024 | 组内分别估计 | 八大 | 0.4164 | 121,665 | 11,069 · 2012年前2001—2011 | 组内分别估计 | 八大 | 0.5388 | 19,446 | 1,773 · 2012年起2012—2024 | 组内分别估计 | Other | 0.5220 | 49,367 | 4,497 · 全样本2001—2024 | 组内分别估计 | Other | 0.3330 | 74,147 | 6,752 · 2012年前2001—2011 | 组内分别估计 | Other | 0.3635 | 24,780 | 2,255

## 公开时点与预测可比样本补充结果

Y为原始log price；按original、public、comparable三个既定样本版本分别估计，保留各版本原消息、预测有效性及support规则。样本准入为11日完整价格、好消息与中性消息。共同模型沿用受限interaction，组内分别估计；FE和公司×财年聚类同短窗。各版本含义与名单见原构造记录，本次不重建或改变这些名单。

样本版本 | 模型 | 比较 | 事件日 | 系数 | 标准误 | p | 年报数 · ---|---|---|---:|---:|---:|---:|---: · original | pooled64 | 四大−Other | +0 | 0.003780 | 0.001331 | 0.0045 | 20,408 · original | pooled64 | 八大−Other | +0 | 0.002756 | 0.001024 | 0.0071 | 20,408 · original | pooled64 | 四大−八大 | +0 | 0.001023 | 0.001248 | 0.4123 | 20,408 · original | pooled64 | 四大−Other | +5 | 0.003105 | 0.002670 | 0.2447 | 20,408 · original | pooled64 | 八大−Other | +5 | 0.002161 | 0.002029 | 0.2869 | 20,408 · original | pooled64 | 四大−八大 | +5 | 0.000945 | 0.002508 | 0.7064 | 20,408 · original | Big4 | 组内好消息−中性 | +0 | 0.002273 | 0.001340 | 0.0900 | 2,574 · original | Big4 | 组内好消息−中性 | +5 | 0.003700 | 0.002622 | 0.1583 | 2,574 · original | Local8 | 组内好消息−中性 | +0 | 0.002564 | 0.000781 | 0.0010 | 11,069 · original | Local8 | 组内好消息−中性 | +5 | 0.006209 | 0.001546 | 0.0001 | 11,069 · original | Other | 组内好消息−中性 | +0 | 0.000500 | 0.000962 | 0.6035 | 6,752 · original | Other | 组内好消息−中性 | +5 | 0.005770 | 0.001894 | 0.0023 | 6,752 · public | pooled64 | 四大−Other | +0 | 0.003547 | 0.001338 | 0.0080 | 20,293 · public | pooled64 | 八大−Other | +0 | 0.002648 | 0.001035 | 0.0105 | 20,293 · public | pooled64 | 四大−八大 | +0 | 0.000899 | 0.001250 | 0.4723 | 20,293 · public | pooled64 | 四大−Other | +5 | 0.002715 | 0.002685 | 0.3120 | 20,293 · public | pooled64 | 八大−Other | +5 | 0.001993 | 0.002047 | 0.3303 | 20,293 · public | pooled64 | 四大−八大 | +5 | 0.000722 | 0.002516 | 0.7742 | 20,293 · public | Big4 | 组内好消息−中性 | +0 | 0.002077 | 0.001342 | 0.1217 | 2,565 · public | Big4 | 组内好消息−中性 | +5 | 0.003756 | 0.002625 | 0.1526 | 2,565 · public | Local8 | 组内好消息−中性 | +0 | 0.002618 | 0.000784 | 0.0008 | 11,027 · public | Local8 | 组内好消息−中性 | +5 | 0.006299 | 0.001551 | 0.0000 | 11,027 · public | Other | 组内好消息−中性 | +0 | 0.000682 | 0.000972 | 0.4828 | 6,688 · public | Other | 组内好消息−中性 | +5 | 0.006039 | 0.001906 | 0.0015 | 6,688 · comparable | pooled64 | 四大−Other | +0 | 0.002859 | 0.001653 | 0.0837 | 16,179 · comparable | pooled64 | 八大−Other | +0 | 0.002236 | 0.001166 | 0.0552 | 16,179 · comparable | pooled64 | 四大−八大 | +0 | 0.000623 | 0.001552 | 0.6879 | 16,179 · comparable | pooled64 | 四大−Other | +5 | 0.001288 | 0.003297 | 0.6961 | 16,179 · comparable | pooled64 | 八大−Other | +5 | 0.002474 | 0.002295 | 0.2811 | 16,179 · comparable | pooled64 | 四大−八大 | +5 | -0.001186 | 0.003105 | 0.7026 | 16,179 · comparable | Big4 | 组内好消息−中性 | +0 | 0.001136 | 0.001757 | 0.5180 | 1,815 · comparable | Big4 | 组内好消息−中性 | +5 | 0.002228 | 0.003465 | 0.5204 | 1,815 · comparable | Local8 | 组内好消息−中性 | +0 | 0.002203 | 0.000865 | 0.0109 | 9,203 · comparable | Local8 | 组内好消息−中性 | +5 | 0.007109 | 0.001699 | 0.0000 | 9,203 · comparable | Other | 组内好消息−中性 | +0 | 0.000654 | 0.001113 | 0.5569 | 5,150 · comparable | Other | 组内好消息−中性 | +5 | 0.005574 | 0.002186 | 0.0108 | 5,150

[完整逐日结果](../../tables/market_event_versions_20261024/event_study_versions_20261024/comparable_sample_without_controls.csv)

## 复核入口

- [另一个版本](event_study_with_controls.md)
- [48次短窗逐项控制诊断及样本校验](../../tables/market_event_versions_20261024/short_controls_diagnostic_20261024/index.md)
- [连续消息模型样本与统计量](../../tables/market_event_versions_20261024/event_study/continuous_interactions/models.csv)
- [年度CAR模型统计量](../../tables/market_event_versions_20261024/event_study/car_surprise_response/models.csv)
- [长窗完整系数](../../tables/market_event_versions_20261024/pead_market_adjusted_paths_side/coefficients.csv)

ERC原报告已有控制，未纳入本次切换；本文件为本轮事件研究结果集。主报告采用无控制事件研究；本次未运行Stata或发布网页。
