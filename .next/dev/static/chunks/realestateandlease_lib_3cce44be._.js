(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/realestateandlease/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/realestateandlease/lib/exportUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/exportUtils.ts
__turbopack_context__.s([
    "exportPropertyCSV",
    ()=>exportPropertyCSV,
    "exportPropertyJSON",
    ()=>exportPropertyJSON,
    "exportPropertyPDF",
    ()=>exportPropertyPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
;
;
async function exportPropertyPDF(propertyAddress, element, propertyData, contractors) {
    try {
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        let yPosition = margin;
        // Helper function to check if we need a new page
        const checkAddPage = (height)=>{
            if (yPosition + height > pageHeight - margin) {
                pdf.addPage();
                yPosition = margin;
                return true;
            }
            return false;
        };
        // ============ HEADER ============
        pdf.setFillColor(37, 99, 235); // Blue
        pdf.rect(0, 0, pageWidth, 40, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.setFont("helvetica", "bold");
        pdf.text("Property Execution Report", margin, 20);
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const reportDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        pdf.text(`Generated: ${reportDate}`, margin, 30);
        yPosition = 50;
        // ============ PROPERTY INFORMATION ============
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text("Property Information", margin, yPosition);
        yPosition += 10;
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const propertyInfo = [
            [
                "Address:",
                propertyData.property?.address || "N/A"
            ],
            [
                "Location:",
                [
                    propertyData.property?.city,
                    propertyData.property?.state,
                    propertyData.property?.zipCode
                ].filter(Boolean).join(", ") || "N/A"
            ],
            [
                "Current Stage:",
                propertyData.workspace?.stage?.replace(/_/g, " ") || "N/A"
            ],
            [
                "ARV:",
                `$${(propertyData.phase1?.arv?.finalArv || propertyData.phase1?.arv?.baseArv || 0).toLocaleString()}`
            ]
        ];
        propertyInfo.forEach(([label, value])=>{
            pdf.setFont("helvetica", "bold");
            pdf.text(label, margin, yPosition);
            pdf.setFont("helvetica", "normal");
            pdf.text(value, margin + 35, yPosition);
            yPosition += 6;
        });
        yPosition += 5;
        // ============ BUDGET vs ACTUAL COSTS ============
        checkAddPage(80);
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text("Budget vs Actual Costs", margin, yPosition);
        yPosition += 10;
        const phase1Costs = propertyData.phase1?.costs || {};
        const executionCosts = propertyData.workspace?.executionCosts || {};
        const costsData = [
            [
                "Purchase Price",
                `$${(phase1Costs.purchasePrice || 0).toLocaleString()}`,
                `$${(executionCosts.purchasePrice || phase1Costs.purchasePrice || 0).toLocaleString()}`,
                `$${((executionCosts.purchasePrice || phase1Costs.purchasePrice || 0) - (phase1Costs.purchasePrice || 0)).toLocaleString()}`
            ],
            [
                "Rehab Cost",
                `$${(phase1Costs.rehabCost || 0).toLocaleString()}`,
                `$${(executionCosts.rehabCost || phase1Costs.rehabCost || 0).toLocaleString()}`,
                `$${((executionCosts.rehabCost || phase1Costs.rehabCost || 0) - (phase1Costs.rehabCost || 0)).toLocaleString()}`
            ],
            [
                "Holding Costs",
                `$${(phase1Costs.holdingCosts || 0).toLocaleString()}`,
                `$${(executionCosts.holdingCosts || phase1Costs.holdingCosts || 0).toLocaleString()}`,
                `$${((executionCosts.holdingCosts || phase1Costs.holdingCosts || 0) - (phase1Costs.holdingCosts || 0)).toLocaleString()}`
            ],
            [
                "Closing Costs",
                `$${(phase1Costs.closingCosts || 0).toLocaleString()}`,
                `$${(executionCosts.closingCosts || phase1Costs.closingCosts || 0).toLocaleString()}`,
                `$${((executionCosts.closingCosts || phase1Costs.closingCosts || 0) - (phase1Costs.closingCosts || 0)).toLocaleString()}`
            ]
        ];
        const totalBudget = phase1Costs.totalCosts || 0;
        const totalActual = executionCosts.totalCosts || phase1Costs.totalCosts || 0;
        const totalVariance = totalActual - totalBudget;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pdf, {
            startY: yPosition,
            head: [
                [
                    "Cost Item",
                    "Budget",
                    "Actual",
                    "Variance"
                ]
            ],
            body: costsData,
            foot: [
                [
                    "TOTAL",
                    `$${totalBudget.toLocaleString()}`,
                    `$${totalActual.toLocaleString()}`,
                    `$${totalVariance.toLocaleString()}`
                ]
            ],
            theme: "grid",
            headStyles: {
                fillColor: [
                    59,
                    130,
                    246
                ],
                textColor: [
                    255,
                    255,
                    255
                ],
                fontStyle: "bold",
                fontSize: 10
            },
            footStyles: {
                fillColor: [
                    229,
                    231,
                    235
                ],
                textColor: [
                    0,
                    0,
                    0
                ],
                fontStyle: "bold",
                fontSize: 10
            },
            styles: {
                fontSize: 9,
                cellPadding: 4
            },
            columnStyles: {
                0: {
                    fontStyle: "bold",
                    cellWidth: 50
                },
                1: {
                    halign: "right",
                    cellWidth: 35
                },
                2: {
                    halign: "right",
                    cellWidth: 35
                },
                3: {
                    halign: "right",
                    cellWidth: 35
                }
            }
        });
        yPosition = pdf.lastAutoTable.finalY + 15;
        // ============ COMPLETED CHECKLIST ITEMS ============
        const completedItems = (propertyData.checklist || []).filter((item)=>item.completed);
        if (completedItems.length > 0) {
            checkAddPage(50);
            pdf.setFontSize(16);
            pdf.setFont("helvetica", "bold");
            pdf.text(`Due Diligence Checklist (${completedItems.length} Completed)`, margin, yPosition);
            yPosition += 10;
            const checklistData = completedItems.map((item, index)=>[
                    (index + 1).toString(),
                    item.label,
                    item.notes || "-",
                    item.dueDate ? new Date(item.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }) : "-"
                ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pdf, {
                startY: yPosition,
                head: [
                    [
                        "#",
                        "Task"
                    ]
                ],
                body: checklistData,
                theme: "striped",
                headStyles: {
                    fillColor: [
                        16,
                        185,
                        129
                    ],
                    textColor: [
                        255,
                        255,
                        255
                    ],
                    fontStyle: "bold",
                    fontSize: 10
                },
                styles: {
                    fontSize: 9,
                    cellPadding: 3
                },
                columnStyles: {
                    0: {
                        cellWidth: 50,
                        halign: "center"
                    },
                    1: {
                        cellWidth: 90
                    }
                }
            });
            yPosition = pdf.lastAutoTable.finalY + 15;
        }
        // ============ CONTRACTOR INFORMATION ============
        if (contractors && contractors.length > 0) {
            contractors.forEach((contractor, contractorIndex)=>{
                checkAddPage(80);
                // Contractor Header
                pdf.setFontSize(16);
                pdf.setFont("helvetica", "bold");
                pdf.text(`Contractor ${contractorIndex + 1}: ${contractor.name}`, margin, yPosition);
                yPosition += 8;
                // Contractor Details
                pdf.setFontSize(9);
                pdf.setFont("helvetica", "normal");
                if (contractor.email) {
                    pdf.text(`Email: ${contractor.email}`, margin, yPosition);
                    yPosition += 5;
                }
                if (contractor.phone) {
                    pdf.text(`Phone: ${contractor.phone}`, margin, yPosition);
                    yPosition += 5;
                }
                if (contractor.licenseNumber) {
                    pdf.text(`License: ${contractor.licenseNumber}`, margin, yPosition);
                    yPosition += 5;
                }
                yPosition += 3;
                // Budget & Progress
                const sowBudget = contractor.sowBudget || 0;
                const sowPaid = contractor.sowPaidToDate || 0;
                const remaining = sowBudget - sowPaid;
                const progress = sowBudget > 0 ? (sowPaid / sowBudget * 100).toFixed(1) : "0.0";
                const contractorFinancials = [
                    [
                        "Budget",
                        `$${sowBudget.toLocaleString()}`
                    ],
                    [
                        "Paid to Date",
                        `$${sowPaid.toLocaleString()}`
                    ],
                    [
                        "Remaining",
                        `$${remaining.toLocaleString()}`
                    ],
                    [
                        "Progress",
                        `${progress}%`
                    ]
                ];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pdf, {
                    startY: yPosition,
                    body: contractorFinancials,
                    theme: "plain",
                    styles: {
                        fontSize: 9,
                        cellPadding: 2
                    },
                    columnStyles: {
                        0: {
                            fontStyle: "bold",
                            cellWidth: 40
                        },
                        1: {
                            halign: "right",
                            cellWidth: 40
                        }
                    }
                });
                yPosition = pdf.lastAutoTable.finalY + 8;
                // Scope Items
                if (contractor.scopeItems && contractor.scopeItems.length > 0) {
                    const scopeData = contractor.scopeItems.map((item, idx)=>[
                            (idx + 1).toString(),
                            item.category,
                            item.status.replace(/_/g, " ")
                        ]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pdf, {
                        startY: yPosition,
                        head: [
                            [
                                "#",
                                "Scope Item",
                                "Status"
                            ]
                        ],
                        body: scopeData,
                        theme: "grid",
                        headStyles: {
                            fillColor: [
                                139,
                                92,
                                246
                            ],
                            textColor: [
                                255,
                                255,
                                255
                            ],
                            fontStyle: "bold",
                            fontSize: 9
                        },
                        styles: {
                            fontSize: 8,
                            cellPadding: 3
                        },
                        columnStyles: {
                            0: {
                                cellWidth: 10,
                                halign: "center"
                            },
                            1: {
                                cellWidth: 100
                            },
                            2: {
                                cellWidth: 45
                            }
                        }
                    });
                    yPosition = pdf.lastAutoTable.finalY + 8;
                }
                // Payment Schedule
                if (contractor.paymentSchedule && contractor.paymentSchedule.length > 0) {
                    const paymentData = contractor.paymentSchedule.map((payment, idx)=>[
                            (idx + 1).toString(),
                            payment.milestone,
                            `${payment.percentage}%`,
                            `$${payment.amount.toLocaleString()}`,
                            payment.status
                        ]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(pdf, {
                        startY: yPosition,
                        head: [
                            [
                                "#",
                                "Milestone",
                                "%",
                                "Amount",
                                "Status"
                            ]
                        ],
                        body: paymentData,
                        theme: "grid",
                        headStyles: {
                            fillColor: [
                                59,
                                130,
                                246
                            ],
                            textColor: [
                                255,
                                255,
                                255
                            ],
                            fontStyle: "bold",
                            fontSize: 9
                        },
                        styles: {
                            fontSize: 8,
                            cellPadding: 3
                        },
                        columnStyles: {
                            0: {
                                cellWidth: 10,
                                halign: "center"
                            },
                            1: {
                                cellWidth: 70
                            },
                            2: {
                                cellWidth: 20,
                                halign: "center"
                            },
                            3: {
                                cellWidth: 30,
                                halign: "right"
                            },
                            4: {
                                cellWidth: 25,
                                halign: "center"
                            }
                        }
                    });
                    yPosition = pdf.lastAutoTable.finalY + 12;
                }
            });
        }
        // ============ FOOTER ============
        const pageCount = pdf.getNumberOfPages();
        for(let i = 1; i <= pageCount; i++){
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setTextColor(128, 128, 128);
            pdf.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, {
                align: "center"
            });
            pdf.text(`${propertyAddress}`, margin, pageHeight - 10);
        }
        // Save PDF
        const fileName = `${propertyAddress.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_execution_report_${new Date().getTime()}.pdf`;
        pdf.save(fileName);
        console.log("✅ PDF exported successfully:", fileName);
    } catch (error) {
        console.error("❌ Error in exportPropertyPDF:", error);
        throw error;
    }
}
function exportPropertyCSV(propertyData, propertyAddress, contractors) {
    try {
        const rows = [];
        // ============ HEADER ============
        rows.push([
            "PROPERTY EXECUTION REPORT"
        ]);
        rows.push([]);
        rows.push([
            "Generated:",
            new Date().toLocaleString()
        ]);
        rows.push([]);
        // ============ PROPERTY INFORMATION ============
        rows.push([
            "PROPERTY INFORMATION"
        ]);
        rows.push([
            "Address:",
            propertyData.property?.address || "N/A"
        ]);
        rows.push([
            "Location:",
            [
                propertyData.property?.city,
                propertyData.property?.state,
                propertyData.property?.zipCode
            ].filter(Boolean).join(", ") || "N/A"
        ]);
        rows.push([
            "Current Stage:",
            propertyData.workspace?.stage?.replace(/_/g, " ") || "N/A"
        ]);
        rows.push([
            "ARV:",
            `$${(propertyData.phase1?.arv?.finalArv || propertyData.phase1?.arv?.baseArv || 0).toLocaleString()}`
        ]);
        rows.push([]);
        // ============ BUDGET VS ACTUAL COSTS ============
        rows.push([
            "BUDGET VS ACTUAL COSTS"
        ]);
        rows.push([
            "Cost Item",
            "Budget",
            "Actual",
            "Variance"
        ]);
        const phase1Costs = propertyData.phase1?.costs || {};
        const executionCosts = propertyData.workspace?.executionCosts || {};
        const purchaseBudget = phase1Costs.purchasePrice || 0;
        const purchaseActual = executionCosts.purchasePrice || phase1Costs.purchasePrice || 0;
        const purchaseVariance = purchaseActual - purchaseBudget;
        const rehabBudget = phase1Costs.rehabCost || 0;
        const rehabActual = executionCosts.rehabCost || phase1Costs.rehabCost || 0;
        const rehabVariance = rehabActual - rehabBudget;
        const holdingBudget = phase1Costs.holdingCosts || 0;
        const holdingActual = executionCosts.holdingCosts || phase1Costs.holdingCosts || 0;
        const holdingVariance = holdingActual - holdingBudget;
        const closingBudget = phase1Costs.closingCosts || 0;
        const closingActual = executionCosts.closingCosts || phase1Costs.closingCosts || 0;
        const closingVariance = closingActual - closingBudget;
        const totalBudget = phase1Costs.totalCosts || 0;
        const totalActual = executionCosts.totalCosts || phase1Costs.totalCosts || 0;
        const totalVariance = totalActual - totalBudget;
        rows.push([
            "Purchase Price",
            `$${purchaseBudget.toLocaleString()}`,
            `$${purchaseActual.toLocaleString()}`,
            `$${purchaseVariance.toLocaleString()}`
        ]);
        rows.push([
            "Rehab Cost",
            `$${rehabBudget.toLocaleString()}`,
            `$${rehabActual.toLocaleString()}`,
            `$${rehabVariance.toLocaleString()}`
        ]);
        rows.push([
            "Holding Costs",
            `$${holdingBudget.toLocaleString()}`,
            `$${holdingActual.toLocaleString()}`,
            `$${holdingVariance.toLocaleString()}`
        ]);
        rows.push([
            "Closing Costs",
            `$${closingBudget.toLocaleString()}`,
            `$${closingActual.toLocaleString()}`,
            `$${closingVariance.toLocaleString()}`
        ]);
        rows.push([
            "TOTAL",
            `$${totalBudget.toLocaleString()}`,
            `$${totalActual.toLocaleString()}`,
            `$${totalVariance.toLocaleString()}`
        ]);
        rows.push([]);
        // ============ COMPLETED CHECKLIST ITEMS ============
        const completedItems = (propertyData.checklist || []).filter((item)=>item.completed);
        if (completedItems.length > 0) {
            rows.push([
                `COMPLETED DUE DILIGENCE CHECKLIST (${completedItems.length} Items)`
            ]);
            rows.push([
                "#",
                "Task",
                "Notes",
                "Due Date"
            ]);
            completedItems.forEach((item, index)=>{
                rows.push([
                    (index + 1).toString(),
                    item.label || "",
                    item.notes || "-",
                    item.dueDate ? new Date(item.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }) : "-"
                ]);
            });
            rows.push([]);
        }
        // ============ CONTRACTOR INFORMATION ============
        if (contractors && contractors.length > 0) {
            rows.push([
                "CONTRACTOR INFORMATION"
            ]);
            rows.push([]);
            contractors.forEach((contractor, contractorIndex)=>{
                // Contractor Header
                rows.push([
                    `CONTRACTOR ${contractorIndex + 1}: ${contractor.name || "N/A"}`
                ]);
                rows.push([]);
                // Contact Details
                rows.push([
                    "Contact Information"
                ]);
                if (contractor.email) rows.push([
                    "Email:",
                    contractor.email
                ]);
                if (contractor.phone) rows.push([
                    "Phone:",
                    contractor.phone
                ]);
                if (contractor.licenseNumber) rows.push([
                    "License Number:",
                    contractor.licenseNumber
                ]);
                if (contractor.address) rows.push([
                    "Address:",
                    contractor.address
                ]);
                if (contractor.state) rows.push([
                    "State:",
                    contractor.state
                ]);
                rows.push([]);
                // Financial Summary
                const sowBudget = contractor.sowBudget || 0;
                const sowPaid = contractor.sowPaidToDate || 0;
                const remaining = sowBudget - sowPaid;
                const progress = sowBudget > 0 ? (sowPaid / sowBudget * 100).toFixed(1) : "0.0";
                rows.push([
                    "Financial Summary"
                ]);
                rows.push([
                    "Budget:",
                    `$${sowBudget.toLocaleString()}`
                ]);
                rows.push([
                    "Paid to Date:",
                    `$${sowPaid.toLocaleString()}`
                ]);
                rows.push([
                    "Remaining:",
                    `$${remaining.toLocaleString()}`
                ]);
                rows.push([
                    "Progress:",
                    `${progress}%`
                ]);
                rows.push([
                    "Status:",
                    contractor.sowStatus?.replace(/_/g, " ") || "N/A"
                ]);
                rows.push([]);
                // Dates
                if (contractor.sowStartDate || contractor.sowCompletionDate) {
                    rows.push([
                        "Project Timeline"
                    ]);
                    if (contractor.sowStartDate) {
                        rows.push([
                            "Start Date:",
                            new Date(contractor.sowStartDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })
                        ]);
                    }
                    if (contractor.sowCompletionDate) {
                        rows.push([
                            "Completion Date:",
                            new Date(contractor.sowCompletionDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })
                        ]);
                    }
                    rows.push([]);
                }
                // Scope Items
                if (contractor.scopeItems && contractor.scopeItems.length > 0) {
                    rows.push([
                        "Scope of Work"
                    ]);
                    rows.push([
                        "#",
                        "Category",
                        "Description",
                        "Status"
                    ]);
                    contractor.scopeItems.forEach((item, idx)=>{
                        rows.push([
                            (idx + 1).toString(),
                            item.category || "N/A",
                            item.description || "-",
                            item.status?.replace(/_/g, " ") || "N/A"
                        ]);
                    });
                    rows.push([]);
                }
                // Payment Schedule
                if (contractor.paymentSchedule && contractor.paymentSchedule.length > 0) {
                    rows.push([
                        "Payment Schedule"
                    ]);
                    rows.push([
                        "#",
                        "Milestone",
                        "Percentage",
                        "Amount",
                        "Status",
                        "Paid Date"
                    ]);
                    contractor.paymentSchedule.forEach((payment, idx)=>{
                        rows.push([
                            (idx + 1).toString(),
                            payment.milestone || "N/A",
                            `${payment.percentage || 0}%`,
                            `$${(payment.amount || 0).toLocaleString()}`,
                            payment.status || "N/A",
                            payment.paidDate ? new Date(payment.paidDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            }) : "-"
                        ]);
                    });
                    rows.push([]);
                }
                // Notes
                if (contractor.notes) {
                    rows.push([
                        "Notes"
                    ]);
                    rows.push([
                        contractor.notes
                    ]);
                    rows.push([]);
                }
                rows.push([
                    "---"
                ]);
                rows.push([]);
            });
        }
        // ============ SUMMARY STATISTICS ============
        rows.push([
            "SUMMARY STATISTICS"
        ]);
        let contractorCount = contractors?.length || 0;
        rows.push([
            "Total Contractors:",
            contractorCount
        ]);
        if (contractors && contractors.length > 0) {
            const totalContractorBudget = contractors.reduce((sum, c)=>sum + (c.sowBudget || 0), 0);
            const totalContractorPaid = contractors.reduce((sum, c)=>sum + (c.sowPaidToDate || 0), 0);
            const totalContractorVariance = totalContractorBudget - totalContractorPaid;
            rows.push([
                "Total Contractor Budget:",
                `$${totalContractorBudget.toLocaleString()}`
            ]);
            rows.push([
                "Total Contractor Paid:",
                `$${totalContractorPaid.toLocaleString()}`
            ]);
            rows.push([
                "Total Contractor Variance:",
                `$${totalContractorVariance.toLocaleString()}`
            ]);
        }
        rows.push([
            "Total Completed Checklist Items:",
            completedItems.length
        ]);
        rows.push([]);
        // ============ FOOTER ============
        rows.push([
            "---"
        ]);
        rows.push([
            "Report generated on:",
            new Date().toLocaleString()
        ]);
        rows.push([
            "Property:",
            propertyData.property?.address || "N/A"
        ]);
        // Convert to CSV string
        const csvContent = rows.map((row)=>row.map((cell)=>{
                // Escape quotes and wrap in quotes if contains comma, quote, or newline
                const cellString = String(cell || "");
                if (cellString.includes(",") || cellString.includes('"') || cellString.includes("\n")) {
                    return `"${cellString.replace(/"/g, '""')}"`;
                }
                return cellString;
            }).join(",")).join("\n");
        // Create and download file
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${propertyAddress.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_execution_report_${new Date().getTime()}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("✅ CSV exported successfully");
    } catch (error) {
        console.error("❌ Error exporting CSV:", error);
        throw error;
    }
}
function exportPropertyJSON(propertyData, propertyAddress) {
    try {
        const jsonString = JSON.stringify(propertyData, null, 2);
        const blob = new Blob([
            jsonString
        ], {
            type: "application/json"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${propertyAddress.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_data_${new Date().getTime()}.json`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Error exporting JSON:", error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/realestateandlease/lib/useFileManagement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileManagement",
    ()=>useFileManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useFileManagement() {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Upload file
    const uploadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileManagement.useCallback[uploadFile]": async (file, fileType, workspaceId, propertyId, uploadedBy, description, contractorId)=>{
            try {
                setIsLoading(true);
                setError(null);
                const formData = new FormData();
                formData.append("file", file);
                formData.append("fileType", fileType);
                formData.append("workspaceId", workspaceId);
                formData.append("propertyId", propertyId);
                formData.append("uploadedBy", uploadedBy);
                if (description) formData.append("description", description);
                if (contractorId) formData.append("contractorId", contractorId);
                console.log("📤 Uploading file:", file.name);
                const res = await fetch("/api/files/upload", {
                    method: "POST",
                    body: formData
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Upload failed");
                }
                const data = await res.json();
                setFiles({
                    "useFileManagement.useCallback[uploadFile]": (prev)=>[
                            data.data,
                            ...prev
                        ]
                }["useFileManagement.useCallback[uploadFile]"]);
                console.log("✅ File uploaded successfully");
                return data.data;
            } catch (err) {
                const message = err instanceof Error ? err.message : "Upload failed";
                setError(message);
                throw err;
            } finally{
                setIsLoading(false);
            }
        }
    }["useFileManagement.useCallback[uploadFile]"], []);
    // Fetch files
    const fetchFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileManagement.useCallback[fetchFiles]": async (filters)=>{
            try {
                setIsLoading(true);
                setError(null);
                const params = new URLSearchParams();
                if (filters.workspaceId) params.append("workspaceId", filters.workspaceId);
                if (filters.propertyId) params.append("propertyId", filters.propertyId);
                if (filters.fileType) params.append("fileType", filters.fileType);
                if (filters.contractorId) params.append("contractorId", filters.contractorId);
                console.log("🔍 Fetching files...");
                const res = await fetch(`/api/files/list?${params}`);
                if (!res.ok) throw new Error("Failed to fetch files");
                const data = await res.json();
                setFiles(data.data);
                console.log(`✅ Fetched ${data.count} files`);
                return data.data;
            } catch (err) {
                const message = err instanceof Error ? err.message : "Fetch failed";
                setError(message);
                throw err;
            } finally{
                setIsLoading(false);
            }
        }
    }["useFileManagement.useCallback[fetchFiles]"], []);
    // Update file
    const updateFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileManagement.useCallback[updateFile]": async (fileId, updates)=>{
            try {
                setIsLoading(true);
                setError(null);
                console.log("✏️ Updating file:", fileId);
                const res = await fetch(`/api/files/${fileId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updates)
                });
                if (!res.ok) throw new Error("Update failed");
                const data = await res.json();
                setFiles({
                    "useFileManagement.useCallback[updateFile]": (prev)=>prev.map({
                            "useFileManagement.useCallback[updateFile]": (f)=>f._id === fileId ? data.data : f
                        }["useFileManagement.useCallback[updateFile]"])
                }["useFileManagement.useCallback[updateFile]"]);
                console.log("✅ File updated");
                return data.data;
            } catch (err) {
                const message = err instanceof Error ? err.message : "Update failed";
                setError(message);
                throw err;
            } finally{
                setIsLoading(false);
            }
        }
    }["useFileManagement.useCallback[updateFile]"], []);
    // Delete file
    const deleteFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileManagement.useCallback[deleteFile]": async (fileId)=>{
            try {
                setIsLoading(true);
                setError(null);
                console.log("🗑️ Deleting file:", fileId);
                const res = await fetch(`/api/files/${fileId}`, {
                    method: "DELETE"
                });
                if (!res.ok) throw new Error("Delete failed");
                setFiles({
                    "useFileManagement.useCallback[deleteFile]": (prev)=>prev.filter({
                            "useFileManagement.useCallback[deleteFile]": (f)=>f._id !== fileId
                        }["useFileManagement.useCallback[deleteFile]"])
                }["useFileManagement.useCallback[deleteFile]"]);
                console.log("✅ File deleted");
            } catch (err) {
                const message = err instanceof Error ? err.message : "Delete failed";
                setError(message);
                throw err;
            } finally{
                setIsLoading(false);
            }
        }
    }["useFileManagement.useCallback[deleteFile]"], []);
    return {
        files,
        isLoading,
        error,
        uploadFile,
        fetchFiles,
        updateFile,
        deleteFile
    };
}
_s(useFileManagement, "CSMh7+PFp2ft5RFrxqCW0KcND/Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=realestateandlease_lib_3cce44be._.js.map