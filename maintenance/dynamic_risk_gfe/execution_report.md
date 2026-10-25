# 客户—事务所动态风险GFE与静态二元混合：执行记录

主估计、全部三套样本、静态独立基准、推断、真实数据敏感性与模拟均已执行。本轮没有将年度配置代理当作已核准的全部决策时点，也没有将静态混合的边界解当作稳健潜在类型识别。

## 主要估计

gate   |     n |   n_overlap |   common_1 |   common_2 |   common_3 |   gap_common_1_3 |   move_iqr_lev · :-------|------:|------------:|-----------:|-----------:|-----------:|-----------------:|---------------: · none   | 24428 |        2377 |   0.009890 |   0.032806 |   0.051288 |        -0.041398 |       0.012376 · r3y3   | 23516 |        2153 |   0.012452 |   0.029972 |   0.046426 |        -0.033974 |       0.015467 · r5y5   | 22212 |        1878 |   0.012517 |   0.031181 |   0.049532 |        -0.037015 |       0.010236

主分组数由训练支持和时间外验证选中1。两组以上的构成与结果作为探索；不能把主规格构成项为零解释为不存在永久sorting。参考支持覆盖明显少于完整年度样本，见common_support.csv。

## 完成状态

对象                                                    | 状态                     | 证据与边界 · :--------------------------------------------------------|:-------------------------|:------------------------------------------------------------------- · 输入与样本                                              | 已执行                   | 7个源文件哈希、三套冻结A1资格、完整样本流 · 日期、成熟度与风险状态                                  | 已执行但覆盖有限         | 年度Jan-1地标；日期核准改聘另估；缺续聘日期和普遍历史原始财务版本 · 历史分组与时间外选择                                    | 已执行                   | 3/5年×1—4组、多起点、2018—19验证和2020—21测试；主规格G=1 · 流动和目的地                                            | 已执行                   | logit、三类MNL、二元目的地对照、总体流向及风险IQR变化 · 二元结果                                                | 已执行                   | 同样本P0—P4、probit/logit、重述/违规/原标签/失败本身、日期改聘结果 · 实际事务所与组内配置                                    | 已执行但解释受限         | 分离支持表、有限子样本无惩罚、全所惩罚0.25/1/4；动态状态配置协方差 · 收费CDF事务所替代分类                                   | 已执行                   | 2012年前19阈值CDF、三类、支持和覆盖 · 共同支持与标准化                                        | 已执行                   | 固定参考样本、阈值敏感性、代数分解；不作为自动因果识别 · 动态主线推断                                            | 已执行                   | 每套500次整段客户bootstrap；另100次重选支持；客户/所×年/双向聚类 · 静态Bernoulli混合                                       | 已执行但边界识别受限     | L=1/2、64起点、端点共享、Jacobian、剖面、留任者和路径软后验 · 静态混合重抽样                                          | 已执行                   | 每套500次，重估参数、后验、留任与总体配对；仅稳定性分布 · 校准模拟                                                | 已执行                   | 六机制各500数据集；每机制前100次8个分类设计与静态基准 · Stata独立核验                                           | 已执行                   | 同一设计及客户聚类probit/logit/MNL，预测差<0.0002 · 全文本、图表与notebook                                  | 已执行                   | 26号报告、31号memo、独立可执行notebook，保留旧AKM结果 · 原文完整动态BLM、私人信息原始参数、三方和多年政策反事实 | 按计划不属于本轮首版估计 | 需要额外时间/信息/序列结构；不伪装为本轮识别对象

## 模拟恢复

case                  |   repetitions |     bias |    rmse |   coverage |   coverage_mc_se |     ari · :----------------------|--------------:|---------:|--------:|-----------:|-----------------:|--------: · dynamic_risk          |           500 | -0.00351 | 0.00629 |    0.87400 |          0.01484 | 0.68714 · heterogeneous_service |           500 |  0.00040 | 0.00455 |    0.95200 |          0.00956 | 0.68669 · long_memory           |           500 | -0.01032 | 0.01155 |    0.45600 |          0.02227 | 0.68573 · permanent_composition |           500 | -0.00423 | 0.00727 |    0.87400 |          0.01484 | 0.68738 · private_selection     |           500 | -0.01311 | 0.01446 |    0.37600 |          0.02166 | 0.68679 · sparse_firms          |           500 | -0.00323 | 0.01201 |    0.66000 |          0.02118 | 0.68677

覆盖率为名义客户聚类delta区间的模拟覆盖；主结果另用重做分类的客户bootstrap。两个区间方法不能直接混称。模拟中的真实技术是设定，不是实证数据识别出的服务贡献。

## 验证记录

check                                               | passed   | detail · :----------------------------------------------------|:---------|:----------------------------------- · original_source_hashes                              | True     | 7 · unique_rows_predecision_dates_maturity              | True     | 24428 · earlier_state_also_public_before_landmark           | True     | 24428 · tenure_uses_completed_origin_history                | True     | no current-spell reset information · main_models_finite_converged_and_decomposition      | True     | 21 · dynamic_500_customer_repetitions_each_gate          | True     | 1500 · mixture_500_customer_repetitions_each_gate          | True     | 1500 · independent_stata_prediction_agreement              | True     | 5.4669536208140634e-05 · known_parameter_binary_mixture_probability_recovery | True     | 0.002279551676032332 · six_simulation_mechanisms_and_full_pilot_grid       | True     | 7800 · all_notebook_code_cells_executed_without_error      | True     | 53

日期断言、成熟窗口、先前已完成合作长度和7个源文件哈希均已检查。Stata实际运行并独立估计三个方程，未仅作静态检查。首轮验证发现当期合作长度泄露换所、以及同年度重复披露的日期问题；已修正并完整重跑。修正前派生表在validation_history中保留，未进入最终报告。

## 估计与复现顺序

1. `code/python/client_auditfirm_dynamic_inputs.py`
2. `code/python/client_auditfirm_dynamic_risk_gfe.py`
3. `code/python/client_auditfirm_binary_mixture_benchmark.py`
4. `code/python/client_auditfirm_dynamic_validation.py`
5. `code/stata/40_selection_matching/46_client_auditfirm_dynamic_risk_gfe.do`
6. `code/python/client_auditfirm_dynamic_audit.py`
7. `code/python/client_auditfirm_dynamic_report.py`

Python为Anaconda，Stata为本地MP，完整日志在`results/logs/20261025_dynamic_risk_estimation/selection_matching/`，Stata日志另在日期目录。全部随机种子和样本流保存于manifest、CSV与脚本；重抽样支持相同代码及输入的断点恢复，改变模型或输入后须先归档检查点。

## 资料及方法依据

Bonhomme, Lamadon and Manresa (2019), *A Distributional Framework for Matched Employer Employee Data*, Econometrica 87(3), 699–739, DOI 10.3982/ECTA15722；Bonhomme, Lamadon and Manresa (2022), *Discretizing Unobserved Heterogeneity*, Econometrica 90(2), 625–643, DOI 10.3982/ECTA15238。已核对作者稿及作者复现仓库；二元主线是本项目的条件分步GFE，未调用连续正态结果的PyTwoWay似然。可复制检索词：`Bonhomme Lamadon Manresa Discretizing Unobserved Heterogeneity`；`Bonhomme Lamadon Manresa Distributional Framework Matched Employer Employee Data`。
