# Stata实跑整合与本次补充检查

42已实际运行：48个基准／独立梯队估计、同一FE的二组和三组分解、36项四大差距，以及24个未来配置联合检验。全部公司年名单、A1与事务所身份、结果变量和连通分量划分均与Python一致。当前主结论维持：失败指标为正组间、负组内，总体插件相关为负。

threshold   |     n |   corr_python |   corr_stata · :------------|------:|--------------:|-------------: · none        | 70339 |   -0.03224921 |  -0.03224921 · r3y3        | 65320 |   -0.04453790 |  -0.04453790 · r5y5        | 58757 |   -0.05740956 |  -0.05740956

## 跨语言核对覆盖什么

- 共同有效身份底样本：70,471行；逐行controls、缺失指示及A1累计门槛最大差异 0。
- 48套估计逐一核对公司年键、原始事务所ID、稳定A1、Y和连通分量；不是仅比较N。
- 事务所FE按分量内公司年权重归一化；客户FE扣除分量常数，年份FE与xb扣除全局常数。各成分对齐后最大差异 1.06e-07，拟合值最大差异 4.44e-09。
- 统计表逐项差异最大 5.95e-08；样本流、组内组间恒等式与四大差距均通过。
- 24个增广模型的公司年与两项未来变量逐行一致；48个系数最大差异 5e-16。

输出：`stata_python_observation_check.csv`、`stata_python_table_check.csv`、`stata_python_mobility_check.csv`。Stata原生结果单独保留在表格目录的`stata/`；代码与输入哈希、日志位置见`stata_integration_manifest.json`。

## 标准误的有限样本约定

两种计算都按客户聚类，但原Python按完整设计秩扣除自由度，reghdfe默认不重复扣除嵌套在客户聚类内的客户FE。默认标准误因此不同。核对时按各自实际自由度因子换算后，标准误最大差异 5.12e-10。原Python结果与Stata默认结果均保留，未悄悄替换检验口径。其依据是本机`reghdfe.mata`第4038–4043行的计算，不是估计系数或聚类对象不同。

## 多重检验：目前的拒绝有多稳健

补充Holm校正。一个检验族是综合失败的3个样本×2个期限（6个联合检验）；另一个是全部4个结果×3个样本×2个期限（24个联合检验）。这是本轮补充的检验族敏感性说明，未宣称预先注册；原始p值仍报告。

engine              | threshold   | outcome           |   horizon |   joint_p |   holm_all_24 |   holm_failure_6 · :--------------------|:------------|:------------------|----------:|----------:|--------------:|-----------------: · python_full_rank_df | none        | any_failure_clean |         1 |   0.45007 |       1.00000 |          0.98646 · python_full_rank_df | none        | any_failure_clean |         2 |   0.00790 |       0.18159 |          0.04737 · python_full_rank_df | r3y3        | any_failure_clean |         1 |   0.46444 |       1.00000 |          0.98646 · python_full_rank_df | r3y3        | any_failure_clean |         2 |   0.17589 |       1.00000 |          0.87947 · python_full_rank_df | r5y5        | any_failure_clean |         1 |   0.32882 |       1.00000 |          0.98646 · python_full_rank_df | r5y5        | any_failure_clean |         2 |   0.21394 |       1.00000 |          0.87947 · stata_nested_df     | none        | any_failure_clean |         1 |   0.41804 |       1.00000 |          0.87650 · stata_nested_df     | none        | any_failure_clean |         2 |   0.00502 |       0.11546 |          0.03012 · stata_nested_df     | r3y3        | any_failure_clean |         1 |   0.43006 |       1.00000 |          0.87650 · stata_nested_df     | r3y3        | any_failure_clean |         2 |   0.14724 |       1.00000 |          0.73622 · stata_nested_df     | r5y5        | any_failure_clean |         1 |   0.29217 |       1.00000 |          0.87650 · stata_nested_df     | r5y5        | any_failure_clean |         2 |   0.18061 |       1.00000 |          0.73622

综合失败不筛选样本、未来两年的原Python联合p为0.00790：在6项检验族内校正后为0.04737，在24项检验族内为0.18159。Stata默认自由度下相应为0.03012与0.11546。因此，窄检验族仍在5%水平拒绝，扩至全部结果后不再拒绝；信号对检验族范围敏感，也未在33和55重复出现。

全部24项联合检验的校正结果见`future_assignment_joint_multiplicity.csv`。不能从若干不显著检验接受严格外生性；也不应只挑显著的一个样本期限解释内生流动。

## 原始日期数据：已有来源，尚需事件级确认

source                          | field                |   n_records |   n_valid_dates | min_date   | max_date · :--------------------------------|:---------------------|------------:|----------------:|:-----------|:----------- · auditor_change                  | DeclareDate          |       16469 |           16469 | 2001-10-10 | 2026-02-28 · auditor_change                  | ChangeDate           |       16469 |           15107 | 2001-10-11 | 2026-02-28 · restatement_old_current_builder | DeclareDate          |       23175 |           23175 | 2001-04-29 | 2021-07-16 · restatement_new_current_builder | DeclareDate          |       31675 |           31675 | 2017-01-05 | 2026-05-26 · restatement_new_current_builder | DirectorDecisionDate |       31675 |           15492 | 2016-03-29 | 2026-05-22 · violation_daily_source          | DeclareDate          |        2233 |            2233 | 2000-02-23 | 2026-01-10 · violation_daily_source          | DisposalDate         |        2233 |            2233 | 2000-02-22 | 2026-01-09

本轮已找到并读取日期字段。旧、新重述来源沿用08当前构造代码引用的路径；日期覆盖表统计原始记录，不重新定义严格重述或违规结果。新库的`DirectorDecisionDate`是更正事项董事会日期，不是审计师聘任决策日期。

改聘表先限制财报审计或财报兼内控审计（AuditContent=1或3），再用公司、原所ID和目的所ID查找连续财年换所的候选原始记录：

threshold   |   consecutive_switches |   switches_with_exact_id_pair |   switches_with_any_change_date |   switches_with_multiple_change_dates |   switches_with_any_declare_date · :------------|-----------------------:|------------------------------:|--------------------------------:|--------------------------------------:|---------------------------------: · none        |                   9218 |                          6630 |                            5800 |                                  2002 |                             6630 · r3y3        |                   7356 |                          5409 |                            4721 |                                  1594 |                             5409 · r5y5        |                   5927 |                          4260 |                            3676 |                                  1182 |                             4260

这些是**原始ID对的候选覆盖上限**，尚未按日历日期确认具体哪次改聘；同一ID对可能多年重复。完整候选与日期相对目标财年的偏移均已导出，没有任意选择最近日期。`ChangeDate`的字典含义是变更日期，`DeclareDate`是公告日期，二者不能自动等同于双方最初作决定的日期。下一步应核对多候选事件、公告内容和生效财年，再把决策前已披露风险接入动态状态。

## 本轮完成与保留的研究决定

本轮补齐Stata实跑、逐行跨语言核对、未来配置检验的Stata复算与自由度解释、多重检验校正、原始日期可用性和候选支持检查。原有KSS、删除敏感性、重复抽样及图形沿用已验证结果；无需重复运行16,848次抽样。

完整客户聚类KSS推断仍未闭合；当前逐观测校正依赖公司年误差独立。动态潜在类型模型仍按已确认范围停留在准备阶段：先核准风险可知时点，再决定结果分布、类型数和初始匹配。它们不能由Stata正常结束或当前诊断通过代替。
