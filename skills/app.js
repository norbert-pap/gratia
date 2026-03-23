// Skill data based on the framework
const skillsData = {
    traits: [
        {
            id: 'decision',
            name: 'Decision Excellence',
            icon: '🎯',
            description: 'The ability to structure problems, analyze information, and deliver insights that drive client decisions.',
            skills: [
                'Research & Information Gathering',
                'Analytical Thinking & Problem-Solving',
                'Quantitative & Data Analysis'
            ],
            levels: {
                A1: {
                    summary: 'Learning with guidance',
                    behaviors: [
                        'Executes well-defined analyses with clear instructions',
                        'Applies frameworks when told which one to use',
                        'Needs guidance on problem structuring and scoping',
                        'Insights are descriptive rather than prescriptive'
                    ]
                },
                A2: {
                    summary: 'Independent on standard work',
                    behaviors: [
                        'Structures problems independently for standard deliverable types',
                        'Applies frameworks correctly and knows when to use which one',
                        'Delivers insights that are clear and actionable',
                        'May need guidance on highly complex problems'
                    ]
                },
                A3: {
                    summary: 'Strategic problem-solver',
                    behaviors: [
                        'Diagnoses client problems and designs the right approach independently',
                        'Anticipates what clients need before they ask',
                        'Delivers insights that shape strategy and drive major decisions',
                        'Handles highly complex, ambiguous problems with confidence'
                    ]
                },
                A4: {
                    summary: 'Expert & framework creator',
                    behaviors: [
                        'Defines frameworks and approaches for novel problem types',
                        'Recognized go-to expert for the most complex problems',
                        'Creates decision tools and templates for others'
                    ]
                }
            }
        },
        {
            id: 'business',
            name: 'Business Acumen',
            icon: '📈',
            description: 'Understanding how businesses work, what drives value, and how to think strategically about client contexts.',
            skills: [
                'Strategic & Business Thinking',
                'Industry Analysis',
                'Value Driver Analysis'
            ],
            levels: {
                A1: {
                    summary: 'Learning business basics',
                    behaviors: [
                        'Basic understanding of common business concepts',
                        'Needs help connecting analysis to business implications',
                        'Learning industry dynamics and business model patterns',
                        'May struggle to think beyond the immediate task'
                    ]
                },
                A2: {
                    summary: 'Solid business understanding',
                    behaviors: [
                        'Solid understanding of business models and industry dynamics',
                        'Connects analysis to business outcomes without prompting',
                        'Can speak credibly about client\'s business context',
                        'Still developing strategic thinking for novel situations'
                    ]
                },
                A3: {
                    summary: 'Deep strategic thinking',
                    behaviors: [
                        'Deep strategic thinking about industries and business models',
                        'Advises clients on business logic, not just analysis',
                        'Anticipates second-order effects and unintended consequences',
                        'Pattern recognition across engagements'
                    ]
                },
                A4: {
                    summary: 'Industry expert',
                    behaviors: [
                        'Expert in specific industries or business model types',
                        'Thought leadership (writes content, trains team)',
                        'Consults on business strategy at CEO/board level'
                    ]
                }
            }
        },
        {
            id: 'execution',
            name: 'Execution Mastery',
            icon: '✅',
            description: 'Delivering high-quality work on time with minimal rework, while managing complexity and ambiguity.',
            skills: [
                'Project & Time Management',
                'Quality Assurance & Attention to Detail',
                'Self-QA Discipline'
            ],
            levels: {
                A1: {
                    summary: 'Needs supervision',
                    behaviors: [
                        'Completes tasks on time with checklist and clear deadlines',
                        'Work requires significant QA and often has errors',
                        'Needs frequent check-ins and course correction',
                        'May miss blockers or fail to escalate proactively'
                    ]
                },
                A2: {
                    summary: 'Reliable and accurate',
                    behaviors: [
                        'Delivers high-quality work on time with minimal supervision',
                        'Work passes Gate 1 and Gate 2 with minor comments',
                        'Anticipates blockers and escalates proactively',
                        'Occasional errors but catches most in self-QA'
                    ]
                },
                A3: {
                    summary: 'Reference-quality work',
                    behaviors: [
                        'Delivers reference-quality work that requires minimal review',
                        'Anticipates edge cases and builds comprehensive solutions',
                        'Work consistently exceeds Gate 2 standards',
                        'Rarely makes errors or requires rework'
                    ]
                },
                A4: {
                    summary: 'Sets the standard',
                    behaviors: [
                        'Every deliverable is reference-quality',
                        'Creates templates and standards for others',
                        'Handles edge cases and novel situations without guidance'
                    ]
                }
            }
        },
        {
            id: 'stakeholder',
            name: 'Stakeholder Impact',
            icon: '🤝',
            description: 'Communicating effectively, building trust with clients, and managing relationships professionally.',
            skills: [
                'Client Communication & Relationship Management',
                'Business Writing & Documentation',
                'Presentation & Visualization'
            ],
            levels: {
                A1: {
                    summary: 'Building confidence',
                    behaviors: [
                        'Communicates clearly but may need coaching on tone/format',
                        'Responsive but may need reminders about communication standards',
                        'Still building client rapport and confidence',
                        'May need manager support on client calls'
                    ]
                },
                A2: {
                    summary: 'Professional communicator',
                    behaviors: [
                        'Communicates professionally and clearly with clients',
                        'Responsive (within 24 hours) and proactive with updates',
                        'Builds strong client relationships',
                        'Handles most client conversations independently'
                    ]
                },
                A3: {
                    summary: 'Client leader',
                    behaviors: [
                        'Leads client relationships and readout meetings',
                        'Navigates difficult conversations and manages conflict',
                        'Tailors communication to audience sophistication',
                        'Represents Gratia at senior client levels (VP, C-suite)'
                    ]
                },
                A4: {
                    summary: 'Executive presence',
                    behaviors: [
                        'Leads client relationships at C-suite/board level',
                        'Represents Gratia externally (conferences, thought leadership)',
                        'Mentors team on client management'
                    ]
                }
            }
        },
        {
            id: 'flexibility',
            name: 'Flexibility & Agility',
            icon: '🔄',
            description: 'Adapting to change, learning quickly, and handling ambiguity with composure.',
            skills: [
                'Tool Fluency & Learning Agility',
                'Adaptability & Composure',
                'Resourcefulness'
            ],
            levels: {
                A1: {
                    summary: 'Adapting with support',
                    behaviors: [
                        'Handles changes in scope with guidance',
                        'Learning curve on new tools/domains is steep',
                        'May struggle with ambiguity or incomplete information',
                        'Seeks feedback but still building ability to self-correct'
                    ]
                },
                A2: {
                    summary: 'Adapts smoothly',
                    behaviors: [
                        'Adapts to scope changes smoothly',
                        'Learns new tools and domains quickly',
                        'Operates effectively with some ambiguity',
                        'Seeks feedback and applies it consistently'
                    ]
                },
                A3: {
                    summary: 'Thrives in ambiguity',
                    behaviors: [
                        'Thrives in ambiguity and rapidly changing situations',
                        'Learns new domains quickly enough to add value immediately',
                        'Self-corrects without external feedback',
                        'Resourceful and takes initiative'
                    ]
                },
                A4: {
                    summary: 'Creates solutions',
                    behaviors: [
                        'Operates effectively in any situation or domain',
                        'Learns faster than anyone else',
                        'Resourceful and creates solutions where none exist'
                    ]
                }
            }
        }
    ]
};

// Financial Services data
const financialServicesData = {
    serviceAreas: [
        {
            id: 'modeling',
            name: 'Financial Modeling & Forecasting',
            icon: '📊',
            description: 'Integrated 3-statement models, driver-based revenue/cost modeling, multi-year projections',
            skills: [
                'Financial statement mechanics',
                'Excel/modeling fluency',
                'Driver-based modeling',
                'Assumptions development',
                'Business acumen',
                'Data gathering & validation',
                'Presentation & visualization',
                'QA discipline'
            ],
            gate1: [
                'Model structure follows template standards',
                'All inputs clearly documented in assumptions tab',
                'Formulas use consistent conventions',
                'Color coding applied correctly',
                'No hardcoded values in formulas',
                'Error checks built in and passing'
            ],
            gate2: [
                '3 statements fully integrated and balancing',
                'Drivers are reasonable and benchmarked',
                'Sensitivity scenarios included',
                'Executive summary dashboard complete',
                'Assumptions clearly sourced',
                'Presentation-ready formatting'
            ]
        },
        {
            id: 'scenario',
            name: 'Scenario & Sensitivity Analysis',
            icon: '🎚️',
            description: 'Base/upside/downside scenarios, what-if analysis, stress testing, risk quantification',
            skills: [
                'Scenario design',
                'Statistical reasoning',
                'Risk identification',
                'Range calibration',
                'Data analysis',
                'Visualization',
                'Business judgment',
                'Excel/modeling fluency'
            ],
            gate1: [
                'Scenarios clearly defined (base/up/down)',
                'Variables identified and documented',
                'Data tables structured correctly',
                'Consistent methodology applied',
                'Output summaries drafted'
            ],
            gate2: [
                'Scenarios internally consistent',
                'Variables appropriately bounded',
                'Tornado/sensitivity charts clear',
                'Key drivers identified and highlighted',
                'Actionable insights documented',
                'Decision-focused recommendations'
            ]
        },
        {
            id: 'valuation',
            name: 'Company & Asset Valuation',
            icon: '💎',
            description: 'DCF, comparable companies, precedent transactions, valuation ranges',
            skills: [
                'Valuation methodology',
                'DCF mechanics',
                'Comparable company analysis',
                'Financial theory',
                'Market research',
                'Assumption quality',
                'Sensitivity & scenario analysis',
                'Business context',
                'Technical accuracy',
                'Presentation'
            ],
            gate1: [
                'Methodology selection justified',
                'DCF mechanics correct (WACC, TV)',
                'Comps selected and documented',
                'Multiples calculated correctly',
                'Sources cited for all inputs'
            ],
            gate2: [
                'Multiple methods triangulated',
                'Assumptions defensible',
                'Sensitivities on key drivers',
                'Football field chart complete',
                'Executive summary compelling',
                'Ready for investor/board scrutiny'
            ]
        }
    ],
    tools: {
        core: {
            name: 'Core Tools',
            icon: '🛠️',
            items: [
                { name: 'Excel / Google Sheets', desc: 'Financial modeling & analysis', level: 'All' },
                { name: 'PowerPoint / Google Slides', desc: 'Presentations & dashboards', level: 'All' },
                { name: 'Notion', desc: 'Documentation & knowledge base', level: 'All' },
                { name: 'Clockify', desc: 'Time tracking', level: 'All' }
            ]
        },
        data: {
            name: 'Data & Research',
            icon: '📊',
            items: [
                { name: 'Capital IQ', desc: 'Financial data & comps', level: 'A2+' },
                { name: 'PitchBook', desc: 'Private market data', level: 'A2+' },
                { name: 'Bloomberg', desc: 'Market data & news', level: 'A3+' },
                { name: 'SEC EDGAR', desc: 'Public filings', level: 'All' }
            ]
        },
        ai: {
            name: 'AI & Automation',
            icon: '🤖',
            items: [
                { name: 'Grace', desc: 'AI-assisted research & drafting', level: 'All' },
                { name: 'Claude / ChatGPT', desc: 'Analysis support & QA', level: 'All' },
                { name: 'Copilot for Excel', desc: 'Formula assistance', level: 'A2+' },
                { name: 'Python / VBA', desc: 'Automation & modeling', level: 'A4' }
            ]
        },
        specialized: {
            name: 'Specialized',
            icon: '⚡',
            items: [
                { name: 'Macabacus', desc: 'Excel/PPT formatting', level: 'A2+' },
                { name: 'Visible Alpha', desc: 'Consensus estimates', level: 'A3+' },
                { name: 'Daloopa', desc: 'Data extraction', level: 'A3+' }
            ]
        }
    },
    skillsByLevel: {
        'Excel & Modeling Fluency': {
            A1: 'Can follow a template; basic formulas (SUM, simple IF statements); needs guidance on structure',
            A2: 'Builds complex formulas independently (nested IFs, INDEX/MATCH, SUMIFS); uses named ranges; understands relative/absolute references; can build 3-statement model from scratch',
            A3: 'Designs flexible, scenario-ready model structures; uses advanced functions (OFFSET, INDIRECT, array formulas); builds robust error checks; models are audit-ready',
            A4: 'Defines modeling best practices; creates templates and training materials; handles edge cases and complex structures (circular references, VBA/macros when needed)'
        },
        'Financial Statement Mechanics': {
            A1: 'Understands basic P&L and balance sheet; needs guidance on integration and cash flow statement',
            A2: 'Builds fully integrated 3-statement models; understands working capital and balance sheet linkages; can troubleshoot why balance sheet doesn\'t balance',
            A3: 'Anticipates complex integration issues (debt schedules, equity waterfalls, circular references); models minority interests, discontinued operations, etc.',
            A4: 'Handles novel accounting situations; trains others on integration logic; can model complex capital structures'
        },
        'Driver-Based Modeling': {
            A1: 'Can model simple revenue as growth % with guidance; needs help identifying drivers',
            A2: 'Builds unit × price models, cohort models, or segment-based revenue; separates fixed vs. variable costs appropriately',
            A3: 'Designs driver structure that matches business model; anticipates second-order effects (e.g., volume growth → pricing pressure); models operating leverage correctly',
            A4: 'Defines revenue model approach for novel business models; builds multi-sided marketplace or SaaS cohort models'
        },
        'Assumptions Development': {
            A1: 'Documents assumptions when told; needs guidance on reasonableness',
            A2: 'Independently researches and documents assumptions; benchmarks against industry data; identifies when assumptions are aggressive',
            A3: 'Proactively validates assumptions through multiple sources; anticipates client questions; stress-tests assumptions; understands interdependencies',
            A4: 'Defines assumption framework for novel situations; trains others on research and validation'
        },
        'Scenario Design & Risk': {
            A1: 'Can change inputs to create scenarios with guidance; doesn\'t yet think about internal consistency',
            A2: 'Builds coherent 3-scenario frameworks (base/upside/downside); ensures related variables move together; can run standard sensitivity tables',
            A3: 'Designs scenario frameworks that match client\'s strategic questions; identifies the 2-3 drivers that truly matter; quantifies risk exposure meaningfully',
            A4: 'Defines scenario methodology for complex multi-variable uncertainty; trains others on scenario logic'
        },
        'Valuation Methodology': {
            A1: 'Can follow DCF or comps template with guidance; doesn\'t yet understand methodology trade-offs',
            A2: 'Executes standard DCF and comparable company analysis independently; understands when to use which method; can calculate WACC with guidance',
            A3: 'Selects and justifies methodology for context; builds multi-method valuations that triangulate; anticipates adjustments (illiquidity, control premiums, normalizations); defends assumptions under scrutiny',
            A4: 'Defines valuation approach for novel situations (early-stage, distressed, complex structures); trains others; can handle option pricing, earnout valuation, etc.'
        },
        'Business Acumen & Context': {
            A1: 'Basic understanding of business models; needs help connecting financial model to business reality',
            A2: 'Understands typical business model patterns (SaaS, marketplaces, retail, manufacturing); can spot when model doesn\'t match business logic',
            A3: 'Deep understanding of industry dynamics, competitive positioning, and strategic context; models reflect business reality; can advise client on business logic, not just numbers',
            A4: 'Expert in specific industries or business model types; can consult on business strategy, not just financial modeling'
        },
        'QA & Technical Accuracy': {
            A1: 'Makes frequent formula errors; needs line-by-line QA',
            A2: 'Produces accurate models with occasional errors; catches own mistakes with checklist; understands QA process',
            A3: 'Models are audit-ready with minimal review; builds comprehensive error checks; anticipates edge cases; rarely makes calculation errors',
            A4: 'Defines QA standards; trains others; creates error-checking frameworks'
        },
        'Presentation & Communication': {
            A1: 'Can create basic charts; needs guidance on executive summary and storyline',
            A2: 'Creates clean visualizations and summary outputs; writes clear executive summaries; presents model logic clearly',
            A3: 'Designs presentations that drive decisions; anticipates executive questions; tailors complexity to audience; tells compelling stories with data',
            A4: 'Sets presentation standards; trains others on data storytelling; board-ready/investor-ready outputs'
        }
    },
    training: {
        'A1_A2': {
            title: 'A1 → A2: Building Technical Fluency',
            goal: 'Build technical fluency and independence on standard deliverables',
            modules: [
                { name: '3-Statement Integration', desc: 'P&L, balance sheet, cash flow linkages', resources: [
                    { name: 'CFI 3-Statement Model', type: 'Course', url: 'https://corporatefinanceinstitute.com/resources/accounting/3-statement-model/', icon: '🎓' }
                ]},
                { name: 'Excel Fluency', desc: 'Named ranges, INDEX/MATCH, data tables', resources: [
                    { name: 'Macabacus Shortcuts', type: 'Tool', url: 'https://macabacus.com/excel/shortcuts', icon: '⌨️' },
                    { name: 'Excel Campus', type: 'Videos', url: 'https://www.youtube.com/c/ExcelCampus', icon: '▶️' }
                ]},
                { name: 'Driver-Based Modeling', desc: 'Revenue patterns, cost modeling', resources: [
                    { name: 'SaaS Metrics Guide', type: 'Article', url: 'https://www.forentrepreneurs.com/saas-metrics-2/', icon: '📄' }
                ]},
                { name: 'DCF Fundamentals', desc: 'Free cash flow, WACC, terminal value', resources: [
                    { name: 'Damodaran DCF', type: 'Course', url: 'https://www.youtube.com/watch?v=znmQ7oMiQrM', icon: '▶️' },
                    { name: 'WACC Calculator', type: 'Tool', url: 'https://finbox.com/NYSE:AAPL/explorer/wacc', icon: '🔧' }
                ]},
                { name: 'Comparable Analysis', desc: 'Peer selection, multiples, normalization', resources: [
                    { name: 'Trading Comps Guide', type: 'Video', url: 'https://www.youtube.com/watch?v=Jx7wG1N8HRs', icon: '▶️' }
                ]}
            ],
            practice: [
                'Build 3-statement model from scratch for case study',
                'Complete standard DCF valuation with comps',
                'Execute sensitivity analysis on case study',
                'Recreate an A2 deliverable independently'
            ],
            ready: [
                'Can build integrated 3-statement model independently',
                'Work passes Gate 2 with minor comments',
                'Rarely makes calculation errors',
                'Independently researches and validates assumptions'
            ],
            books: [
                { name: 'Financial Modeling (Pignataro)', url: 'https://www.amazon.com/Financial-Modeling-Valuation-Practical-Investment/dp/1118558766' }
            ]
        },
        'A2_A3': {
            title: 'A2 → A3: Developing Strategic Thinking',
            goal: 'Move from executing against a plan to designing the approach',
            modules: [
                { name: 'Problem Diagnosis', desc: 'Understanding the real decision', resources: [
                    { name: 'Issue Trees Explained', type: 'Video', url: 'https://www.youtube.com/watch?v=II2EO3Nw4Q0', icon: '▶️' }
                ]},
                { name: 'Methodology Selection', desc: 'When to use which valuation method', resources: [
                    { name: 'Damodaran on Methods', type: 'Lecture', url: 'https://www.youtube.com/watch?v=Z5chrxMuBoo', icon: '▶️' }
                ]},
                { name: 'Advanced Modeling', desc: 'Debt schedules, waterfalls, circulars', resources: [
                    { name: 'LBO Modeling', type: 'Course', url: 'https://www.youtube.com/watch?v=L6F2k8s4LIw', icon: '▶️' },
                    { name: 'Circular References', type: 'Guide', url: 'https://corporatefinanceinstitute.com/resources/excel/circular-reference/', icon: '📄' }
                ]},
                { name: 'Risk & Scenarios', desc: 'Monte Carlo, sensitivity analysis', resources: [
                    { name: 'Monte Carlo in Excel', type: 'Tutorial', url: 'https://www.youtube.com/watch?v=7ESK5SaP-bc', icon: '▶️' }
                ]},
                { name: 'Executive Presentation', desc: 'Presentations that drive decisions', resources: [
                    { name: 'Storytelling with Data', type: 'Course', url: 'https://www.storytellingwithdata.com/', icon: '🎓' }
                ]}
            ],
            practice: [
                'Own full client engagement end-to-end',
                'Build valuation for complex situation',
                'Design scenario framework without prescribed approach',
                'Present to mock executive audience with Q&A',
                'QA another analyst\'s work using Gate 2 rubric'
            ],
            ready: [
                'Can design model approach independently',
                'Work consistently passes Gate 2',
                'Anticipates client questions proactively',
                'Exercises sound business judgment',
                'Can defend work under scrutiny'
            ],
            books: [
                { name: 'McKinsey Valuation', url: 'https://www.amazon.com/Valuation-Measuring-Managing-Companies-Finance/dp/1119610885' },
                { name: 'Investment Banking (Rosenbaum)', url: 'https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706181' }
            ]
        },
        'A3_A4': {
            title: 'A3 → A4: Achieving Mastery',
            goal: 'Become reference-quality expert; create knowledge and train others',
            modules: [
                { name: 'Novel Situations', desc: 'Early-stage, distressed, emerging models', resources: [
                    { name: 'VC Valuation Methods', type: 'Article', url: 'https://www.toptal.com/finance/valuation/startup-valuation-methods', icon: '📄' },
                    { name: 'Distressed Valuation', type: 'Video', url: 'https://www.youtube.com/watch?v=L5TqjPXGbRc', icon: '▶️' }
                ]},
                { name: 'Training & Coaching', desc: 'Teaching modeling, giving feedback', resources: [
                    { name: 'Teaching Technical Skills', type: 'Course', url: 'https://www.linkedin.com/learning/teaching-technical-skills', icon: '🎓' }
                ]},
                { name: 'Advanced Automation', desc: 'VBA, Python for finance', resources: [
                    { name: 'Python for Finance', type: 'Course', url: 'https://www.udemy.com/course/python-for-finance-and-trading-algorithms/', icon: '🎓' },
                    { name: 'Excel VBA', type: 'Course', url: 'https://www.youtube.com/watch?v=G05TrN7nt6k', icon: '▶️' }
                ]},
                { name: 'Real Options', desc: 'Option pricing, complex structures', resources: [
                    { name: 'Real Options Intro', type: 'Lecture', url: 'https://www.youtube.com/watch?v=Sz6mQ6gRLvI', icon: '▶️' }
                ]}
            ],
            practice: [
                'Create new templates or training modules',
                'Lead calibration sessions and rubric development',
                'QA complex deliverables from A2/A3 analysts',
                'Own a service category (DRI for standards)',
                'Mentor 2-3 junior analysts'
            ],
            ready: [
                'Consistently produces reference-quality work',
                'Successfully trains and develops other analysts',
                'Creates frameworks used by the team',
                'Handles novel situations without guidance',
                'Recognized as go-to expert'
            ],
            books: [
                { name: 'Options, Futures & Derivatives (Hull)', url: 'https://www.amazon.com/Options-Futures-Other-Derivatives-11th/dp/013693997X' },
                { name: 'Venture Deals', url: 'https://www.amazon.com/Venture-Deals-Smarter-Lawyer-Capitalist/dp/1119594820' }
            ]
        }
    },
    templates: {
        modeling: {
            name: 'Financial Modeling & Forecasting',
            icon: '📊',
            items: [
                { name: 'Blank 3-Statement Model', icon: '📄' },
                { name: 'SaaS Financial Model', icon: '☁️' },
                { name: 'E-commerce Model', icon: '🛒' },
                { name: 'Subscription Business Template', icon: '🔄' },
                { name: 'Marketplace Model', icon: '🏪' },
                { name: 'Professional Services Model', icon: '👔' },
                { name: 'Assumptions Documentation', icon: '📝' },
                { name: 'Executive Summary Template', icon: '📈' }
            ]
        },
        scenario: {
            name: 'Scenario & Sensitivity Analysis',
            icon: '🎚️',
            items: [
                { name: '3-Scenario Framework', icon: '📊' },
                { name: 'Sensitivity Analysis Template', icon: '🎯' },
                { name: 'Scenario Narrative Template', icon: '📖' },
                { name: 'Risk Assessment Framework', icon: '⚠️' },
                { name: 'Monte Carlo Simulation', icon: '🎲' }
            ]
        },
        valuation: {
            name: 'Company & Asset Valuation',
            icon: '💎',
            items: [
                { name: 'DCF Valuation Template', icon: '💰' },
                { name: 'WACC Calculator', icon: '🧮' },
                { name: 'Comparable Company Analysis', icon: '📊' },
                { name: 'Precedent Transaction Analysis', icon: '🔍' },
                { name: 'Football Field Chart', icon: '🏈' },
                { name: 'Valuation Summary Template', icon: '📋' },
                { name: '409A Valuation Template', icon: '📑' },
                { name: 'Valuation Bridge Template', icon: '🌉' }
            ]
        },
        quality: {
            name: 'Quality & Process',
            icon: '✅',
            items: [
                { name: 'Gate 1 Checklists', icon: '☑️' },
                { name: 'Gate 2 Rubrics', icon: '📋' },
                { name: 'QA Checklist', icon: '🔍' },
                { name: 'Calibration Examples Library', icon: '📚' }
            ]
        }
    }
};

// Core training paths data
const coreTrainingData = {
    'A1_A2': {
        title: 'A1 → A2: Building Independence',
        goal: 'Develop technical fluency and reliability on standard deliverables',
        duration: '6-12 months',
        focus: [
            {
                trait: 'Decision Excellence',
                icon: '🎯',
                modules: [
                    'Research fundamentals & source validation',
                    'Framework application (MECE, issue trees)',
                    'Basic quantitative analysis'
                ],
                resources: [
                    { name: 'MECE Framework Explained', type: 'Video', url: 'https://www.youtube.com/watch?v=DtXVzlMPKqY', icon: '▶️' },
                    { name: 'Google Search Operators', type: 'Guide', url: 'https://ahrefs.com/blog/google-advanced-search-operators/', icon: '📄' }
                ]
            },
            {
                trait: 'Business Acumen',
                icon: '📈',
                modules: [
                    'Business model patterns (SaaS, marketplaces, etc.)',
                    'Financial statement basics',
                    'Industry dynamics overview'
                ],
                resources: [
                    { name: 'Strategyzer Business Models', type: 'Video', url: 'https://www.youtube.com/watch?v=QoAOzMTLP5s', icon: '▶️' },
                    { name: 'Accounting Fundamentals', type: 'Course', url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-stateme', icon: '🎓' }
                ]
            },
            {
                trait: 'Execution Mastery',
                icon: '✅',
                modules: [
                    'Project management basics & time tracking',
                    'Self-QA checklist discipline',
                    'Gate 1 & Gate 2 standards'
                ],
                resources: [
                    { name: 'Getting Things Done Method', type: 'Video', url: 'https://www.youtube.com/watch?v=gCswMsONkwY', icon: '▶️' },
                    { name: 'Notion Fundamentals', type: 'Course', url: 'https://www.notion.so/help/guides', icon: '🎓' }
                ]
            },
            {
                trait: 'Stakeholder Impact',
                icon: '🤝',
                modules: [
                    'Email etiquette & communication standards',
                    'Meeting preparation & note-taking',
                    'Business writing fundamentals'
                ],
                resources: [
                    { name: 'Professional Email Writing', type: 'Course', url: 'https://www.linkedin.com/learning/writing-emails-people-want-to-read', icon: '🎓' },
                    { name: 'Grammarly Writing Assistant', type: 'Tool', url: 'https://www.grammarly.com/', icon: '🔧' }
                ]
            },
            {
                trait: 'Flexibility & Agility',
                icon: '🔄',
                modules: [
                    'Core tools bootcamp (Excel, Slides, Notion)',
                    'Grace AI assistant training',
                    'Feedback reception & application'
                ],
                resources: [
                    { name: 'Excel Skills for Business', type: 'Course', url: 'https://www.coursera.org/specializations/excel', icon: '🎓' },
                    { name: 'Learning How to Learn', type: 'Course', url: 'https://www.coursera.org/learn/learning-how-to-learn', icon: '🎓' }
                ]
            }
        ],
        ready: [
            '3+ consecutive projects passing Gate 2',
            'Client feedback averaging 4+ stars',
            'Demonstrates independence on standard deliverables',
            'No major quality or professionalism issues'
        ],
        books: [
            { name: 'Pyramid Principle', url: 'https://www.amazon.com/Pyramid-Principle-Logic-Writing-Thinking/dp/0273710516' },
            { name: 'HBR Guide to Business Writing', url: 'https://www.amazon.com/HBR-Guide-Better-Business-Writing/dp/1422184031' }
        ]
    },
    'A2_A3': {
        title: 'A2 → A3: Developing Strategic Thinking',
        goal: 'Move from executing plans to designing approaches; from outputs to outcomes',
        duration: '12-24 months',
        focus: [
            {
                trait: 'Decision Excellence',
                icon: '🎯',
                modules: [
                    'Problem diagnosis & scoping workshops',
                    'Methodology selection & approach design',
                    'Advanced analytical frameworks'
                ],
                resources: [
                    { name: 'McKinsey Problem Solving', type: 'Video', url: 'https://www.youtube.com/watch?v=vF-FdN1_3lA', icon: '▶️' },
                    { name: 'Hypothesis-Driven Thinking', type: 'Article', url: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-strategy-and-corporate-finance-blog', icon: '📄' }
                ]
            },
            {
                trait: 'Business Acumen',
                icon: '📈',
                modules: [
                    'Industry deep-dives & strategic analysis',
                    'Second-order effects & unintended consequences',
                    'Pattern recognition across engagements'
                ],
                resources: [
                    { name: 'Stratechery Articles', type: 'Newsletter', url: 'https://stratechery.com/', icon: '📰' },
                    { name: 'HBR Strategy Playlist', type: 'Videos', url: 'https://www.youtube.com/c/harabordbusinessreview', icon: '▶️' }
                ]
            },
            {
                trait: 'Execution Mastery',
                icon: '✅',
                modules: [
                    'Complex project management',
                    'Building comprehensive solutions',
                    'Anticipating edge cases'
                ],
                resources: [
                    { name: 'Advanced Project Management', type: 'Course', url: 'https://www.coursera.org/learn/project-management-foundations', icon: '🎓' },
                    { name: 'Risk Management Fundamentals', type: 'Course', url: 'https://www.linkedin.com/learning/project-management-foundations-risk', icon: '🎓' }
                ]
            },
            {
                trait: 'Stakeholder Impact',
                icon: '🤝',
                modules: [
                    'Executive communication skills',
                    'Leading client readout meetings',
                    'Navigating difficult conversations'
                ],
                resources: [
                    { name: 'Executive Presence', type: 'Course', url: 'https://www.linkedin.com/learning/executive-presence-for-women', icon: '🎓' },
                    { name: 'Difficult Conversations', type: 'Video', url: 'https://www.youtube.com/watch?v=YLBDkz0TwLM', icon: '▶️' }
                ]
            },
            {
                trait: 'Flexibility & Agility',
                icon: '🔄',
                modules: [
                    'Thriving in ambiguity',
                    'Self-correction without feedback',
                    'Resourcefulness & initiative'
                ],
                resources: [
                    { name: 'Adaptive Leadership', type: 'Course', url: 'https://www.edx.org/course/adaptive-leadership', icon: '🎓' },
                    { name: 'First Principles Thinking', type: 'Article', url: 'https://fs.blog/first-principles/', icon: '📄' }
                ]
            }
        ],
        ready: [
            '5+ consecutive projects exceeding Gate 2',
            'Client feedback averaging 4.5+ stars',
            'Demonstrates sound business judgment',
            'Can defend work under board/investor scrutiny',
            'Other analysts seek them out for guidance'
        ],
        books: [
            { name: 'Good Strategy Bad Strategy', url: 'https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239' },
            { name: 'Thinking, Fast and Slow', url: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555' },
            { name: 'Crucial Conversations', url: 'https://www.amazon.com/Crucial-Conversations-Tools-Talking-Stakes/dp/1260474186' }
        ]
    },
    'A3_A4': {
        title: 'A3 → A4: Achieving Mastery',
        goal: 'Become recognized expert; create knowledge and train others',
        duration: '18-36 months',
        focus: [
            {
                trait: 'Decision Excellence',
                icon: '🎯',
                modules: [
                    'Defining frameworks for novel problems',
                    'Creating decision tools & templates',
                    'Thought leadership development'
                ],
                resources: [
                    { name: 'Building Mental Models', type: 'Article', url: 'https://fs.blog/mental-models/', icon: '📄' },
                    { name: 'Systems Thinking', type: 'Course', url: 'https://www.coursera.org/learn/systems-thinking', icon: '🎓' }
                ]
            },
            {
                trait: 'Business Acumen',
                icon: '📈',
                modules: [
                    'Industry/vertical specialization',
                    'CEO/board-level strategic consulting',
                    'External thought leadership'
                ],
                resources: [
                    { name: 'a]6z Podcast', type: 'Podcast', url: 'https://a16z.com/podcasts/', icon: '🎙️' },
                    { name: 'Writing for Thought Leadership', type: 'Guide', url: 'https://www.linkedin.com/pulse/how-write-thought-leadership-content-ann-handley/', icon: '📄' }
                ]
            },
            {
                trait: 'Execution Mastery',
                icon: '✅',
                modules: [
                    'Setting quality standards for team',
                    'Creating templates & training materials',
                    'Handling novel situations without guidance'
                ],
                resources: [
                    { name: 'Instructional Design', type: 'Course', url: 'https://www.coursera.org/learn/instructional-design-fundamentals', icon: '🎓' },
                    { name: 'Documentation Best Practices', type: 'Guide', url: 'https://www.writethedocs.org/guide/', icon: '📄' }
                ]
            },
            {
                trait: 'Stakeholder Impact',
                icon: '🤝',
                modules: [
                    'C-suite/board relationship management',
                    'External representation (conferences)',
                    'Mentoring on client management'
                ],
                resources: [
                    { name: 'Board Communications', type: 'Course', url: 'https://www.linkedin.com/learning/communicating-with-executives', icon: '🎓' },
                    { name: 'Public Speaking Mastery', type: 'Course', url: 'https://www.coursera.org/learn/public-speaking', icon: '🎓' }
                ]
            },
            {
                trait: 'Flexibility & Agility',
                icon: '🔄',
                modules: [
                    'Operating in any domain',
                    'Creating solutions where none exist',
                    'Evaluating & selecting new tools'
                ],
                resources: [
                    { name: 'Product Hunt - New Tools', type: 'Tool', url: 'https://www.producthunt.com/', icon: '🔧' },
                    { name: 'AI Tools Directory', type: 'Directory', url: 'https://theresanaiforthat.com/', icon: '🤖' }
                ]
            }
        ],
        ready: [
            'Every deliverable is reference-quality',
            'Client feedback consistently 5 stars',
            'Creates frameworks used by the team',
            'Successfully trains and develops other analysts',
            'Recognized as go-to expert'
        ],
        books: [
            { name: 'The McKinsey Way', url: 'https://www.amazon.com/McKinsey-Way-Ethan-M-Rasiel/dp/0070534489' },
            { name: 'The Trusted Advisor', url: 'https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347' },
            { name: 'High Output Management', url: 'https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884' }
        ]
    }
};

// Current state
let currentLevel = 'A1';
let currentServiceLevel = 'A1';
let currentCoreTraining = 'A1_A2';
let assessmentScores = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCoreTabs();
    initLevelTabs();
    initCoreTrainingTabs();
    renderTraits();
    renderCoreTraining('A1_A2');
    initAssessment();
    initServices();
    initAQSCalculator();
    initSimulator();
});

// Core tabs (Traits vs Training)
function initCoreTabs() {
    const tabs = document.querySelectorAll('.core-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.coreTab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.core-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            document.getElementById(`${tabId}-panel`).classList.add('active');
        });
    });
}

function initCoreTrainingTabs() {
    const tabs = document.querySelectorAll('[data-core-training]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const training = tab.dataset.coreTraining;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            renderCoreTraining(training);
        });
    });
}

function renderCoreTraining(pathKey) {
    const container = document.getElementById('coreTrainingContent');
    const path = coreTrainingData[pathKey];

    if (!path) return;

    container.innerHTML = `
        <div class="training-section">
            <div class="training-header">
                <h3>${path.title}</h3>
                <p>${path.goal}</p>
                <span class="training-duration">${path.duration}</span>
            </div>
            <div class="training-body">
                <div class="core-training-grid">
                    ${path.focus.map(item => `
                        <div class="core-training-card">
                            <div class="core-training-card-header">
                                <span class="core-training-icon">${item.icon}</span>
                                <span class="core-training-trait">${item.trait}</span>
                            </div>
                            <ul class="core-training-modules">
                                ${item.modules.map(m => `<li>${m}</li>`).join('')}
                            </ul>
                            ${item.resources ? `
                            <div class="card-resources">
                                ${item.resources.map(r => `
                                    <a href="${r.url}" target="_blank" class="card-resource-link">
                                        <span>${r.icon}</span>
                                        <span>${r.name}</span>
                                        <span class="resource-type">${r.type}</span>
                                    </a>
                                `).join('')}
                            </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>

                <div class="training-ready">
                    <h5>Ready for Promotion When</h5>
                    <ul>
                        ${path.ready.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                ${path.books ? `
                <div class="training-books">
                    <h5>📚 Further Reading (Optional)</h5>
                    <div class="books-list">
                        ${path.books.map(b => `<a href="${b.url}" target="_blank">${b.name}</a>`).join(' · ')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Navigation
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;

            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById(view).classList.add('active');
        });
    });
}

// Level tabs
function initLevelTabs() {
    const levelTabs = document.querySelectorAll('.level-tab');
    levelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentLevel = tab.dataset.level;

            levelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            renderTraits();
        });
    });
}

// Render traits grid
function renderTraits() {
    const grid = document.querySelector('.traits-grid');
    grid.innerHTML = skillsData.traits.map(trait => `
        <div class="trait-card" data-trait="${trait.id}">
            <div class="trait-header">
                <div class="trait-icon">${trait.icon}</div>
                <div class="trait-header-content">
                    <div class="trait-title-row">
                        <div class="trait-title">${trait.name}</div>
                        <div class="trait-level-chip">${currentLevel}</div>
                    </div>
                    <div class="trait-subtitle">${trait.levels[currentLevel].summary}</div>
                </div>
            </div>
            <div class="trait-content">
                <p class="trait-description">${trait.description}</p>
                <ul class="trait-skills">
                    ${trait.levels[currentLevel].behaviors.map(behavior => `
                        <li class="trait-skill">${behavior}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Assessment
function initAssessment() {
    const container = document.querySelector('.skills-assessment');

    // Initialize with typical A3 analyst scores
    const a3Defaults = {
        decision: 82,
        business: 78,
        execution: 85,
        stakeholder: 80,
        flexibility: 75
    };

    skillsData.traits.forEach(trait => {
        assessmentScores[trait.id] = a3Defaults[trait.id] || 75;
    });

    // Render skill groups
    container.innerHTML = skillsData.traits.map(trait => `
        <div class="skill-group" data-trait="${trait.id}">
            <div class="skill-group-header">
                <div class="skill-group-icon">${trait.icon}</div>
                <div class="skill-group-title">${trait.name}</div>
            </div>
            <div class="skill-slider">
                <div class="skill-slider-header">
                    <span class="skill-slider-label">Proficiency Level</span>
                    <span class="skill-slider-value" id="value-${trait.id}">${assessmentScores[trait.id]}%</span>
                </div>
                <input type="range" min="0" max="100" value="${assessmentScores[trait.id]}"
                       id="slider-${trait.id}"
                       data-trait="${trait.id}">
                <div class="skill-range-labels">
                    <span class="range-label" data-range="A1">A1</span>
                    <span class="range-label" data-range="A2">A2</span>
                    <span class="range-label" data-range="A3">A3</span>
                    <span class="range-label" data-range="A4">A4</span>
                </div>
            </div>
            <div class="skill-level-desc" id="desc-${trait.id}">
                ${getTraitLevelDescription(trait.id, assessmentScores[trait.id])}
            </div>
        </div>
    `).join('');

    // Add event listeners
    skillsData.traits.forEach(trait => {
        const slider = document.getElementById(`slider-${trait.id}`);
        slider.addEventListener('input', (e) => {
            assessmentScores[trait.id] = parseInt(e.target.value);
            document.getElementById(`value-${trait.id}`).textContent = `${e.target.value}%`;
            document.getElementById(`desc-${trait.id}`).innerHTML = getTraitLevelDescription(trait.id, e.target.value);
            updateAssessmentSummary();
            drawRadarChart();
        });
    });

    updateAssessmentSummary();
    drawRadarChart();
}

// Trait level descriptions for assessment
const traitLevelDescriptions = {
    decision: {
        A1: { level: 'A1 · Learning', desc: 'Executes defined analyses with guidance. Needs help structuring problems.' },
        A2: { level: 'A2 · Independent', desc: 'Structures problems independently. Delivers clear, actionable insights.' },
        A3: { level: 'A3 · Strategic', desc: 'Diagnoses problems and designs approaches. Anticipates client needs.' },
        A4: { level: 'A4 · Expert', desc: 'Defines frameworks for novel problems. Go-to for complex challenges.' }
    },
    business: {
        A1: { level: 'A1 · Learning', desc: 'Basic understanding of business concepts. Needs help with implications.' },
        A2: { level: 'A2 · Independent', desc: 'Solid grasp of business models. Connects analysis to outcomes.' },
        A3: { level: 'A3 · Strategic', desc: 'Deep strategic thinking. Advises on business logic, not just numbers.' },
        A4: { level: 'A4 · Expert', desc: 'Industry expert. Consults at CEO/board level on strategy.' }
    },
    execution: {
        A1: { level: 'A1 · Learning', desc: 'Completes tasks with supervision. Work often has errors requiring QA.' },
        A2: { level: 'A2 · Independent', desc: 'Delivers quality work on time. Passes Gate 2 with minor comments.' },
        A3: { level: 'A3 · Strategic', desc: 'Reference-quality work. Anticipates edge cases. Rarely needs rework.' },
        A4: { level: 'A4 · Expert', desc: 'Every deliverable is exemplar. Creates standards for others.' }
    },
    stakeholder: {
        A1: { level: 'A1 · Learning', desc: 'Professional but needs coaching on tone. Building client confidence.' },
        A2: { level: 'A2 · Independent', desc: 'Clear communicator. Builds strong relationships. Handles calls independently.' },
        A3: { level: 'A3 · Strategic', desc: 'Leads client relationships. Navigates difficult conversations. VP/C-suite presence.' },
        A4: { level: 'A4 · Expert', desc: 'Executive presence. Board-level relationships. Mentors team on client management.' }
    },
    flexibility: {
        A1: { level: 'A1 · Learning', desc: 'Adapts with guidance. Steep learning curve on new tools/domains.' },
        A2: { level: 'A2 · Independent', desc: 'Adapts smoothly to changes. Learns new tools quickly.' },
        A3: { level: 'A3 · Strategic', desc: 'Thrives in ambiguity. Self-corrects. Resourceful and takes initiative.' },
        A4: { level: 'A4 · Expert', desc: 'Operates in any domain. Creates solutions where none exist.' }
    }
};

function getTraitLevelDescription(traitId, score) {
    const levels = traitLevelDescriptions[traitId];
    if (!levels) return '';

    let levelKey = 'A1';
    if (score >= 90) levelKey = 'A4';
    else if (score >= 70) levelKey = 'A3';
    else if (score >= 50) levelKey = 'A2';

    const levelData = levels[levelKey];
    return `<span class="desc-level">${levelData.level}</span><span class="desc-text">${levelData.desc}</span>`;
}

function updateAssessmentSummary() {
    const scores = Object.values(assessmentScores);
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

    document.getElementById('overallScore').textContent = avg;

    // Determine suggested level
    let level = 'A1';
    if (avg >= 85) level = 'A4';
    else if (avg >= 70) level = 'A3';
    else if (avg >= 50) level = 'A2';
    document.getElementById('suggestedLevel').textContent = level;

    // Find top strength and growth area
    const traitScores = skillsData.traits.map(t => ({
        name: t.name,
        score: assessmentScores[t.id]
    }));

    traitScores.sort((a, b) => b.score - a.score);
    document.getElementById('topStrength').textContent = traitScores[0].name.split(' ')[0];
    document.getElementById('growthArea').textContent = traitScores[traitScores.length - 1].name.split(' ')[0];
}

// Radar Chart
function drawRadarChart() {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const traits = skillsData.traits;
    const numTraits = traits.length;
    const angleStep = (2 * Math.PI) / numTraits;
    const startAngle = -Math.PI / 2;

    // Draw background circles
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 4) * i, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Draw axes
    traits.forEach((trait, i) => {
        const angle = startAngle + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#E5E7EB';
        ctx.stroke();

        // Labels
        const labelX = centerX + (radius + 30) * Math.cos(angle);
        const labelY = centerY + (radius + 30) * Math.sin(angle);

        ctx.font = '11px -apple-system, sans-serif';
        ctx.fillStyle = '#6B7280';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Shorter labels
        const shortName = trait.name.split(' ')[0];
        ctx.fillText(shortName, labelX, labelY);
    });

    // Draw data polygon
    ctx.beginPath();
    traits.forEach((trait, i) => {
        const score = assessmentScores[trait.id] / 100;
        const angle = startAngle + i * angleStep;
        const x = centerX + radius * score * Math.cos(angle);
        const y = centerY + radius * score * Math.sin(angle);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(79, 70, 229, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#4F46E5';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw data points
    traits.forEach((trait, i) => {
        const score = assessmentScores[trait.id] / 100;
        const angle = startAngle + i * angleStep;
        const x = centerX + radius * score * Math.cos(angle);
        const y = centerY + radius * score * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#4F46E5';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

// Services View
function initServices() {
    initServiceTabs();
    initServiceLevelTabs();
    initTrainingTabs();
    renderServiceAreas();
    renderSkillsByLevel();
    renderTools();
    renderTrainingPath('A1_A2');
    renderTemplates();
}

function initServiceTabs() {
    const tabs = document.querySelectorAll('.service-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.service-panel').forEach(panel => {
                panel.classList.add('hidden');
            });
            document.getElementById(`${tabId}-panel`).classList.remove('hidden');
        });
    });
}

function initServiceLevelTabs() {
    const levelTabs = document.querySelectorAll('.service-level-tabs .level-tab');
    levelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentServiceLevel = tab.dataset.serviceLevel;

            levelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            renderSkillsByLevel();
        });
    });
}

function initTrainingTabs() {
    const tabs = document.querySelectorAll('.training-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const training = tab.dataset.training;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            renderTrainingPath(training);
        });
    });
}

function renderServiceAreas() {
    const grid = document.getElementById('deliverablesGrid');
    grid.innerHTML = financialServicesData.serviceAreas.map(area => `
        <div class="service-area-card">
            <div class="service-area-header">
                <div class="service-area-icon">${area.icon}</div>
                <div>
                    <div class="service-area-title">${area.name}</div>
                    <div class="service-area-subtitle">${area.description}</div>
                </div>
            </div>
            <div class="service-area-skills">
                <h4>Core Skills Required</h4>
                <div class="skill-list">
                    ${area.skills.map(skill => `
                        <div class="skill-list-item">${skill}</div>
                    `).join('')}
                </div>
            </div>
            <div class="service-area-checklist">
                <h4>Quality Checklist</h4>
                <div class="checklist-grid">
                    <div class="checklist-section">
                        <h5>Gate 1 (Internal QA)</h5>
                        <div class="checklist-items">
                            ${area.gate1.map(item => `
                                <div class="checklist-item">${item}</div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="checklist-section">
                        <h5>Gate 2 (Final Review)</h5>
                        <div class="checklist-items">
                            ${area.gate2.map(item => `
                                <div class="checklist-item">${item}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSkillsByLevel() {
    const container = document.getElementById('skillsByLevel');
    const skills = financialServicesData.skillsByLevel;

    container.innerHTML = Object.entries(skills).map(([skillName, levels]) => `
        <div class="skill-level-card">
            <div class="skill-level-name">${skillName}</div>
            <div class="skill-level-description">${levels[currentServiceLevel]}</div>
        </div>
    `).join('');
}

function renderTools() {
    const container = document.getElementById('toolsGrid');
    const tools = financialServicesData.tools;

    container.innerHTML = Object.entries(tools).map(([key, category]) => `
        <div class="tool-category">
            <div class="tool-category-header">
                <span class="tool-category-icon">${category.icon}</span>
                <span class="tool-category-title">${category.name}</span>
            </div>
            <div class="tool-list">
                ${category.items.map(tool => `
                    <div class="tool-item">
                        <div class="tool-item-info">
                            <div class="tool-item-name">${tool.name}</div>
                            <div class="tool-item-desc">${tool.desc}</div>
                        </div>
                        <span class="tool-item-badge">${tool.level}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderTrainingPath(pathKey) {
    const container = document.getElementById('trainingContent');
    const path = financialServicesData.training[pathKey];

    if (!path) return;

    container.innerHTML = `
        <div class="training-section">
            <div class="training-header">
                <h3>${path.title}</h3>
                <p>${path.goal}</p>
            </div>
            <div class="training-body">
                <div class="training-columns">
                    <div class="training-category">
                        <h4>Training Modules</h4>
                        <div class="training-items">
                            ${path.modules.map(module => `
                                <div class="training-item-expanded">
                                    <div class="training-item-header">
                                        <div class="training-item-icon">📚</div>
                                        <div class="training-item-content">
                                            <strong>${module.name}</strong>
                                            <span>${module.desc}</span>
                                        </div>
                                    </div>
                                    ${module.resources ? `
                                    <div class="training-item-resources">
                                        ${module.resources.map(r => `
                                            <a href="${r.url}" target="_blank" class="item-resource-link">
                                                <span>${r.icon}</span>
                                                <span>${r.name}</span>
                                                <span class="resource-type">${r.type}</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="training-category">
                        <h4>Practice Deliverables</h4>
                        <div class="training-items">
                            ${path.practice.map(item => `
                                <div class="training-item">
                                    <div class="training-item-icon">💼</div>
                                    <div class="training-item-content">
                                        <strong>${item}</strong>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="training-ready">
                    <h5>Ready for Promotion When</h5>
                    <ul>
                        ${path.ready.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                ${path.books ? `
                <div class="training-books">
                    <h5>📚 Further Reading (Optional)</h5>
                    <div class="books-list">
                        ${path.books.map(b => `<a href="${b.url}" target="_blank">${b.name}</a>`).join(' · ')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

function renderTemplates() {
    const container = document.getElementById('templatesGrid');
    const templates = financialServicesData.templates;

    container.innerHTML = Object.entries(templates).map(([key, category]) => `
        <div class="template-category">
            <div class="template-category-header">
                <div class="template-category-icon">${category.icon}</div>
                <div class="template-category-title">${category.name}</div>
            </div>
            <div class="template-list">
                ${category.items.map(item => `
                    <div class="template-item">
                        <div class="template-icon">${item.icon}</div>
                        <span class="template-name">${item.name}</span>
                        <span class="template-arrow">→</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// AQS Calculator
function initAQSCalculator() {
    const inputs = [
        { id: 'gate1PassRate', display: 'gate1PassRateValue', suffix: '%' },
        { id: 'gate2PassRate', display: 'gate2PassRateValue', suffix: '%' },
        { id: 'insightQuality', display: 'insightQualityValue', suffix: '/5' },
        { id: 'onTimeRate', display: 'onTimeRateValue', suffix: '%' },
        { id: 'reworkRate', display: 'reworkRateValue', suffix: '%' },
        { id: 'clientFeedback', display: 'clientFeedbackValue', suffix: '/5' },
        { id: 'responseSLA', display: 'responseSLAValue', suffix: '%' },
        { id: 'commQuality', display: 'commQualityValue', suffix: '/5' }
    ];

    inputs.forEach(input => {
        const el = document.getElementById(input.id);
        if (el) {
            el.addEventListener('input', () => {
                const value = el.value;
                document.getElementById(input.display).textContent = value + input.suffix;
                calculateAQS();
            });
        }
    });

    calculateAQS();
}

function calculateAQS() {
    // Get values
    const gate1PassRate = parseFloat(document.getElementById('gate1PassRate').value);
    const gate2PassRate = parseFloat(document.getElementById('gate2PassRate').value);
    const insightQuality = parseFloat(document.getElementById('insightQuality').value);
    const onTimeRate = parseFloat(document.getElementById('onTimeRate').value);
    const reworkRate = parseFloat(document.getElementById('reworkRate').value);
    const clientFeedback = parseFloat(document.getElementById('clientFeedback').value);
    const responseSLA = parseFloat(document.getElementById('responseSLA').value);
    const commQuality = parseFloat(document.getElementById('commQuality').value);

    // Calculate component scores (normalized to 100)
    // Gate 1 (20%) + Gate 2 (40%) + Insight Quality (40%) for accuracy
    const accuracyScore = (gate1PassRate * 0.2) + (gate2PassRate * 0.4) + ((insightQuality / 5) * 100 * 0.4);
    const deliveryScore = (onTimeRate * 0.5) + ((100 - reworkRate) * 0.5);
    const professionalismScore = ((clientFeedback / 5) * 100 * 0.4) + (responseSLA * 0.3) + ((commQuality / 5) * 100 * 0.3);

    // Calculate weighted AQS
    const aqs = (accuracyScore * 0.4) + (deliveryScore * 0.3) + (professionalismScore * 0.3);

    // Update displays
    document.getElementById('accuracyScore').textContent = Math.round(accuracyScore);
    document.getElementById('deliveryScore').textContent = Math.round(deliveryScore);
    document.getElementById('professionalismScore').textContent = Math.round(professionalismScore);
    document.getElementById('aqsScore').textContent = Math.round(aqs);

    // Update gauge
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (aqs / 100) * circumference;
    document.getElementById('aqsProgress').style.strokeDashoffset = offset;

    // Update level indicator
    let level = 'Below A1';
    const segments = document.querySelectorAll('.aqs-level-segment');
    segments.forEach(seg => seg.classList.remove('active'));

    if (aqs >= 95) {
        level = 'A4';
        document.querySelector('[data-level="A4"]').classList.add('active');
    } else if (aqs >= 90) {
        level = 'A3';
        document.querySelector('[data-level="A3"]').classList.add('active');
    } else if (aqs >= 80) {
        level = 'A2';
        document.querySelector('[data-level="A2"]').classList.add('active');
    } else if (aqs >= 70) {
        level = 'A1';
        document.querySelector('[data-level="A1"]').classList.add('active');
    }

    document.getElementById('aqsLevel').textContent = level;

    // Update breakdown chart
    const total = aqs;
    const accWidth = (accuracyScore * 0.4 / total) * 100;
    const delWidth = (deliveryScore * 0.3 / total) * 100;
    const profWidth = (professionalismScore * 0.3 / total) * 100;

    document.getElementById('breakdownAccuracy').style.width = accWidth + '%';
    document.getElementById('breakdownDelivery').style.width = delWidth + '%';
    document.getElementById('breakdownProfessionalism').style.width = profWidth + '%';

    document.getElementById('legendAccuracy').textContent = Math.round(accuracyScore * 0.4);
    document.getElementById('legendDelivery').textContent = Math.round(deliveryScore * 0.3);
    document.getElementById('legendProfessionalism').textContent = Math.round(professionalismScore * 0.3);
}

// Simulator
const simulatorState = {
    projects: [],
    traitScores: {},
    skillScores: {},
    aqs: 0,
    redFlags: []
};

const projectTypes = [
    { name: 'DCF Valuation - Tech Startup', category: 'valuation', avgHours: 25 },
    { name: '3-Statement Model - SaaS Co', category: 'modeling', avgHours: 35 },
    { name: 'Comparable Company Analysis', category: 'valuation', avgHours: 15 },
    { name: 'Scenario Analysis - Retail', category: 'scenario', avgHours: 20 },
    { name: 'Financial Forecast - Healthcare', category: 'modeling', avgHours: 30 },
    { name: 'Precedent Transaction Analysis', category: 'valuation', avgHours: 20 },
    { name: 'Sensitivity Analysis - Fintech', category: 'scenario', avgHours: 15 },
    { name: 'Revenue Model - Marketplace', category: 'modeling', avgHours: 25 },
    { name: 'Cost Analysis - Manufacturing', category: 'modeling', avgHours: 20 },
    { name: 'Valuation Summary - Series B', category: 'valuation', avgHours: 30 }
];

const categoryLabels = {
    modeling: 'Financial Modeling',
    scenario: 'Scenario Analysis',
    valuation: 'Valuation'
};

function initSimulator() {
    // Initialize date
    const today = new Date();
    const lastReview = new Date(today);
    lastReview.setMonth(lastReview.getMonth() - 3);
    document.getElementById('simLastReview').value = lastReview.toISOString().split('T')[0];

    // Name change updates avatar
    document.getElementById('simName').addEventListener('input', (e) => {
        const name = e.target.value;
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        document.getElementById('simAvatar').textContent = initials || 'NA';
    });

    // Hours input changes
    ['hoursModeling', 'hoursScenario', 'hoursValuation'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateTotalHours);
    });

    // Randomize projects button
    document.getElementById('randomizeProjects').addEventListener('click', generateRandomProjects);

    // Run simulation button
    document.getElementById('runSimulation').addEventListener('click', runFullSimulation);

    // Export button
    document.getElementById('exportReport').addEventListener('click', exportReport);

    // Generate initial data
    updateTotalHours();
    generateRandomProjects();
    renderSimulatorTraits();
    renderSimulatorSkills();
    runFullSimulation();
}

function updateTotalHours() {
    const modeling = parseInt(document.getElementById('hoursModeling').value) || 0;
    const scenario = parseInt(document.getElementById('hoursScenario').value) || 0;
    const valuation = parseInt(document.getElementById('hoursValuation').value) || 0;
    const total = modeling + scenario + valuation;
    document.getElementById('simTotalHours').textContent = total;
    return { modeling, scenario, valuation, total };
}

function generateRandomProjects() {
    const level = document.getElementById('simLevel').value;
    const hours = updateTotalHours();

    // Estimate number of projects based on total hours (avg ~25 hrs per project)
    const projectCount = Math.min(Math.max(Math.floor(hours.total / 25), 3), 12);

    // Adjust success rates based on level
    const baseGate1Rate = { A1: 0.65, A2: 0.85, A3: 0.95, A4: 0.99 }[level];
    const baseGate2Rate = { A1: 0.6, A2: 0.8, A3: 0.92, A4: 0.98 }[level];
    const baseOnTimeRate = { A1: 0.7, A2: 0.85, A3: 0.95, A4: 0.99 }[level];

    simulatorState.projects = [];

    // Distribute projects based on hours logged per category
    const totalHours = hours.total || 1;
    const categoryWeights = {
        modeling: hours.modeling / totalHours,
        scenario: hours.scenario / totalHours,
        valuation: hours.valuation / totalHours
    };

    for (let i = 0; i < projectCount; i++) {
        // Select category based on hours distribution
        const rand = Math.random();
        let category;
        if (rand < categoryWeights.modeling) {
            category = 'modeling';
        } else if (rand < categoryWeights.modeling + categoryWeights.scenario) {
            category = 'scenario';
        } else {
            category = 'valuation';
        }

        // Filter project types by category
        const categoryProjects = projectTypes.filter(p => p.category === category);
        const projectType = categoryProjects[Math.floor(Math.random() * categoryProjects.length)];

        const gate1Passed = Math.random() < baseGate1Rate;
        const gate2Passed = gate1Passed ? (Math.random() < baseGate2Rate / baseGate1Rate) : (Math.random() < baseGate2Rate * 0.5);
        const onTime = Math.random() < baseOnTimeRate;
        const rating = gate2Passed ?
            (3.5 + Math.random() * 1.5).toFixed(1) :
            (2.5 + Math.random() * 1.5).toFixed(1);

        // Randomize hours slightly around the average
        const projectHours = Math.round(projectType.avgHours * (0.7 + Math.random() * 0.6));

        let status = 'fail';
        if (gate2Passed && onTime) status = 'pass';
        else if (gate2Passed || gate1Passed) status = 'partial';

        simulatorState.projects.push({
            name: projectType.name,
            category: category,
            hours: projectHours,
            gate1Passed: gate1Passed,
            gate2Passed: gate2Passed,
            onTime: onTime,
            rating: parseFloat(rating),
            status: status
        });
    }

    renderProjectList();
    updateProjectSummary();
}

function renderProjectList() {
    const container = document.getElementById('simProjectList');
    container.innerHTML = simulatorState.projects.map(project => `
        <div class="sim-project-item">
            <div class="project-status ${project.status}"></div>
            <div class="project-info">
                <span class="project-name">${project.name}</span>
                <span class="project-category">${categoryLabels[project.category]} · ${project.hours}h</span>
            </div>
            <div class="project-meta">
                <span class="${project.gate1Passed ? 'gate-pass' : 'gate-fail'}">G1 ${project.gate1Passed ? '✓' : '✗'}</span>
                <span class="${project.gate2Passed ? 'gate-pass' : 'gate-fail'}">G2 ${project.gate2Passed ? '✓' : '✗'}</span>
                <span>${project.onTime ? '✓' : 'Late'}</span>
                <span>⭐${project.rating}</span>
            </div>
        </div>
    `).join('');
}

function updateProjectSummary() {
    const projects = simulatorState.projects;
    if (projects.length === 0) return;

    const gate1Rate = Math.round((projects.filter(p => p.gate1Passed).length / projects.length) * 100);
    const gate2Rate = Math.round((projects.filter(p => p.gate2Passed).length / projects.length) * 100);
    const onTimeRate = Math.round((projects.filter(p => p.onTime).length / projects.length) * 100);
    const avgRating = (projects.reduce((sum, p) => sum + p.rating, 0) / projects.length).toFixed(1);
    const totalProjectHours = projects.reduce((sum, p) => sum + p.hours, 0);

    document.getElementById('simGate1Rate').textContent = gate1Rate + '%';
    document.getElementById('simGate2Rate').textContent = gate2Rate + '%';
    document.getElementById('simOnTimeRate').textContent = onTimeRate + '%';
    document.getElementById('simAvgRating').textContent = avgRating;
    document.getElementById('simProjectHours').textContent = totalProjectHours + 'h';
}

function renderSimulatorTraits() {
    const container = document.getElementById('simTraitsGrid');
    const traits = [
        { id: 'decision', name: 'Decision Excellence', icon: '🎯' },
        { id: 'business', name: 'Business Acumen', icon: '📈' },
        { id: 'execution', name: 'Execution Mastery', icon: '✅' },
        { id: 'stakeholder', name: 'Stakeholder Impact', icon: '🤝' },
        { id: 'flexibility', name: 'Flexibility & Agility', icon: '🔄' }
    ];

    container.innerHTML = traits.map(trait => {
        const score = 50 + Math.floor(Math.random() * 40);
        simulatorState.traitScores[trait.id] = score;
        return `
            <div class="sim-trait-item">
                <span class="trait-icon">${trait.icon}</span>
                <div class="trait-info">
                    <div class="trait-name">${trait.name}</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${score}%"></div>
                    </div>
                </div>
                <span class="trait-level">${scoreToLevel(score)}</span>
            </div>
        `;
    }).join('');
}

function renderSimulatorSkills() {
    const container = document.getElementById('simSkillsGrid');
    const skills = [
        'Excel & Modeling',
        'Financial Statements',
        'Driver-Based Modeling',
        'Assumptions',
        'Valuation',
        'Presentation'
    ];

    container.innerHTML = skills.map(skill => {
        const score = 50 + Math.floor(Math.random() * 40);
        simulatorState.skillScores[skill] = score;
        return `
            <div class="sim-skill-item">
                <div class="trait-info">
                    <div class="trait-name">${skill}</div>
                    <div class="trait-bar">
                        <div class="trait-fill" style="width: ${score}%"></div>
                    </div>
                </div>
                <span class="trait-level">${scoreToLevel(score)}</span>
            </div>
        `;
    }).join('');
}

function scoreToLevel(score) {
    if (score >= 90) return 'A4';
    if (score >= 75) return 'A3';
    if (score >= 55) return 'A2';
    return 'A1';
}

function runFullSimulation() {
    // Recalculate based on current state
    const projects = simulatorState.projects;
    const level = document.getElementById('simLevel').value;
    const tenure = parseInt(document.getElementById('simTenure').value) || 0;
    const hours = updateTotalHours();

    // Calculate AQS from projects
    const gate1Rate = projects.filter(p => p.gate1Passed).length / projects.length;
    const gate2Rate = projects.filter(p => p.gate2Passed).length / projects.length;
    const onTimeRate = projects.filter(p => p.onTime).length / projects.length;
    const avgRating = projects.reduce((sum, p) => sum + p.rating, 0) / projects.length;
    const reworkRate = 1 - gate1Rate; // Rework needed if Gate 1 fails

    // Accuracy: Gate 1 (20%) + Gate 2 (40%) + Insight Quality (40%)
    const accuracyScore = (gate1Rate * 100 * 0.2) + (gate2Rate * 100 * 0.4) + ((avgRating / 5) * 100 * 0.4);
    const deliveryScore = (onTimeRate * 100 * 0.5) + ((1 - reworkRate) * 100 * 0.5);
    const professionalismScore = ((avgRating / 5) * 100 * 0.5) + (onTimeRate * 100 * 0.5);

    simulatorState.aqs = Math.round((accuracyScore * 0.4) + (deliveryScore * 0.3) + (professionalismScore * 0.3));

    // Update result cards
    document.getElementById('simAQS').textContent = simulatorState.aqs;

    let perfLevel = 'Below A1';
    if (simulatorState.aqs >= 95) perfLevel = 'A4';
    else if (simulatorState.aqs >= 90) perfLevel = 'A3';
    else if (simulatorState.aqs >= 80) perfLevel = 'A2';
    else if (simulatorState.aqs >= 70) perfLevel = 'A1';
    document.getElementById('simPerfLevel').textContent = perfLevel;

    // Promotion readiness
    const nextLevel = { A1: 'A2', A2: 'A3', A3: 'A4', A4: 'A4' }[level];
    document.getElementById('simNextLevel').textContent = nextLevel;

    const promoRequirements = getPromoRequirements(level, tenure, hours, simulatorState.aqs, avgRating);
    const metCount = promoRequirements.filter(r => r.met).length;
    const promoPercent = Math.round((metCount / promoRequirements.length) * 100);

    document.getElementById('simPromoPercent').textContent = promoPercent + '%';
    document.getElementById('simPromoFill').style.width = promoPercent + '%';

    let promoReady = 'Not Ready';
    if (promoPercent >= 100) promoReady = 'Ready';
    else if (promoPercent >= 80) promoReady = 'Almost Ready';
    else if (promoPercent >= 50) promoReady = 'In Progress';
    document.getElementById('simPromoReady').textContent = promoReady;

    // Render promo requirements
    document.getElementById('simPromoReqs').innerHTML = promoRequirements.map(req => `
        <div class="promo-req ${req.met ? 'met' : 'unmet'}">
            <span class="promo-req-icon">${req.met ? '✓' : '○'}</span>
            <span>${req.label}</span>
        </div>
    `).join('');

    // Next review date
    const reviewCadence = { A1: 3, A2: 6, A3: 12, A4: 12 }[level];
    const lastReview = new Date(document.getElementById('simLastReview').value);
    const nextReview = new Date(lastReview);
    nextReview.setMonth(nextReview.getMonth() + reviewCadence);
    document.getElementById('simNextReview').textContent = nextReview.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    // Generate recommendations
    generateRecommendations();

    // Check for red flags
    checkRedFlags(gate2Rate, onTimeRate, avgRating);
}

function getPromoRequirements(level, tenure, hours, aqs, avgRating) {
    const projects = simulatorState.projects;
    const requirements = {
        A1: [
            { label: '6+ months tenure', met: tenure >= 6 },
            { label: '250+ cluster hours', met: hours.total >= 250 },
            { label: '50+ hrs modeling', met: hours.modeling >= 50 },
            { label: '50+ hrs valuation', met: hours.valuation >= 50 },
            { label: 'AQS 80+', met: aqs >= 80 },
            { label: '4+ star feedback', met: avgRating >= 4 },
            { label: 'Gate 1 consistently passes', met: projects.filter(p => p.gate1Passed).length >= Math.floor(projects.length * 0.8) },
            { label: '3+ Gate 2 passes', met: projects.filter(p => p.gate2Passed).length >= 3 }
        ],
        A2: [
            { label: '12+ months at A2', met: tenure >= 12 },
            { label: '500+ cluster hours', met: hours.total >= 500 },
            { label: '150+ hrs modeling', met: hours.modeling >= 150 },
            { label: '100+ hrs valuation', met: hours.valuation >= 100 },
            { label: '75+ hrs scenario', met: hours.scenario >= 75 },
            { label: 'AQS 90+', met: aqs >= 90 },
            { label: '4.5+ star feedback', met: avgRating >= 4.5 },
            { label: 'Gate 1 always passes', met: projects.every(p => p.gate1Passed) },
            { label: '5+ Gate 2 exceeded', met: projects.filter(p => p.gate2Passed && p.rating >= 4.5).length >= 5 }
        ],
        A3: [
            { label: '18+ months at A3', met: tenure >= 18 },
            { label: '750+ cluster hours', met: hours.total >= 750 },
            { label: '250+ hrs in each category', met: hours.modeling >= 250 && hours.valuation >= 250 && hours.scenario >= 150 },
            { label: 'AQS 95+', met: aqs >= 95 },
            { label: '5 star feedback', met: avgRating >= 4.8 },
            { label: 'Reference-quality work', met: projects.every(p => p.gate1Passed && p.gate2Passed) }
        ],
        A4: [
            { label: 'Maximum level', met: true }
        ]
    };
    return requirements[level];
}

function generateRecommendations() {
    const container = document.getElementById('simRecsList');
    const level = document.getElementById('simLevel').value;
    const traitScores = simulatorState.traitScores;
    const skillScores = simulatorState.skillScores;

    const recommendations = [];

    // Find weakest trait
    const weakestTrait = Object.entries(traitScores).sort((a, b) => a[1] - b[1])[0];
    const traitNames = {
        decision: 'Decision Excellence',
        business: 'Business Acumen',
        execution: 'Execution Mastery',
        stakeholder: 'Stakeholder Impact',
        flexibility: 'Flexibility & Agility'
    };

    recommendations.push({
        icon: '📚',
        title: `Focus on ${traitNames[weakestTrait[0]]}`,
        desc: `This is the lowest-scoring core trait. Consider targeted training and mentorship to improve from ${scoreToLevel(weakestTrait[1])} level.`
    });

    // Find weakest skill
    const weakestSkill = Object.entries(skillScores).sort((a, b) => a[1] - b[1])[0];
    recommendations.push({
        icon: '🎯',
        title: `Develop ${weakestSkill[0]} skills`,
        desc: `Service-specific skill gap identified. Review training modules and practice deliverables for this area.`
    });

    // Level-specific recommendations
    if (level === 'A1') {
        recommendations.push({
            icon: '👥',
            title: 'Increase mentorship sessions',
            desc: 'Schedule weekly check-ins with A3/A4 mentor to accelerate learning and get feedback on approach.'
        });
    } else if (level === 'A2') {
        recommendations.push({
            icon: '💼',
            title: 'Lead end-to-end engagements',
            desc: 'Request opportunities to own full client engagements with light supervision to develop strategic thinking.'
        });
    } else if (level === 'A3') {
        recommendations.push({
            icon: '📝',
            title: 'Create training materials',
            desc: 'Document your expertise by creating templates or training modules for junior analysts.'
        });
    }

    // AQS-based recommendation
    if (simulatorState.aqs < 85) {
        recommendations.push({
            icon: '✅',
            title: 'Improve QA discipline',
            desc: 'Focus on self-review before submission. Use Gate 1 checklists systematically to catch errors.'
        });
    }

    container.innerHTML = recommendations.map(rec => `
        <div class="sim-rec-item">
            <span class="rec-icon">${rec.icon}</span>
            <div class="rec-content">
                <h4>${rec.title}</h4>
                <p>${rec.desc}</p>
            </div>
        </div>
    `).join('');
}

function checkRedFlags(gate2Rate, onTimeRate, avgRating) {
    const container = document.getElementById('simFlagsList');
    const panel = document.getElementById('simFlagsPanel');
    const flags = [];
    const projects = simulatorState.projects;

    const gate1Rate = projects.filter(p => p.gate1Passed).length / projects.length;

    if (gate1Rate < 0.7) {
        flags.push('Low Gate 1 pass rate - significant rework required, QA discipline needs improvement');
    }
    if (gate2Rate < 0.6) {
        flags.push('Low Gate 2 pass rate - quality issues detected');
    }
    if (onTimeRate < 0.7) {
        flags.push('Frequent missed deadlines - project management concerns');
    }
    if (avgRating < 3.5) {
        flags.push('Low client feedback scores - professionalism review needed');
    }
    if (simulatorState.aqs < 70) {
        flags.push('AQS below minimum threshold - performance improvement plan recommended');
    }

    // Check for consistent Gate 1 failures (needs lots of internal rework)
    const recentGate1Fails = projects.slice(-3).filter(p => !p.gate1Passed).length;
    if (recentGate1Fails >= 2) {
        flags.push('Pattern of Gate 1 failures - self-QA checklist training recommended');
    }

    // Check for consistent Gate 2 failures
    const recentGate2Fails = projects.slice(-3).filter(p => !p.gate2Passed).length;
    if (recentGate2Fails >= 2) {
        flags.push('Pattern of recent Gate 2 failures - additional supervision required');
    }

    simulatorState.redFlags = flags;

    if (flags.length === 0) {
        panel.classList.add('hidden');
    } else {
        panel.classList.remove('hidden');
        container.innerHTML = flags.map(flag => `
            <div class="sim-flag-item">
                <span class="flag-icon">⚠️</span>
                <span class="flag-content">${flag}</span>
            </div>
        `).join('');
    }
}

function exportReport() {
    const name = document.getElementById('simName').value;
    const level = document.getElementById('simLevel').value;
    const date = new Date().toLocaleDateString();

    const report = `
ANALYST EVALUATION REPORT
========================
Generated: ${date}

ANALYST PROFILE
--------------
Name: ${name}
Current Level: ${level}
Tenure: ${document.getElementById('simTenure').value} months
Service Cluster: Financial Services

LOGGED HOURS BY CATEGORY
-----------------------
Financial Modeling: ${document.getElementById('hoursModeling').value} hrs
Scenario Analysis: ${document.getElementById('hoursScenario').value} hrs
Valuation: ${document.getElementById('hoursValuation').value} hrs
Total Cluster Hours: ${document.getElementById('simTotalHours').textContent} hrs

PERFORMANCE METRICS
------------------
AQS Score: ${simulatorState.aqs}
Gate 1 Pass Rate: ${document.getElementById('simGate1Rate').textContent}
Gate 2 Pass Rate: ${document.getElementById('simGate2Rate').textContent}
On-Time Delivery: ${document.getElementById('simOnTimeRate').textContent}
Avg Client Rating: ${document.getElementById('simAvgRating').textContent}

PROMOTION STATUS
---------------
Current Level: ${level}
Performance Level: ${document.getElementById('simPerfLevel').textContent}
Promotion Readiness: ${document.getElementById('simPromoReady').textContent}

${simulatorState.redFlags.length > 0 ? `
RED FLAGS
---------
${simulatorState.redFlags.map(f => '- ' + f).join('\n')}
` : ''}
    `.trim();

    // Create download
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analyst-evaluation-${name.replace(/\s+/g, '-').toLowerCase()}-${date.replace(/\//g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}
