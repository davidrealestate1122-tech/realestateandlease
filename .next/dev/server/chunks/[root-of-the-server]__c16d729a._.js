module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/realestateandlease/app/api/files/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileManagement",
    ()=>useFileManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
function useFileManagement() {
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useState"])(null);
    // Upload file
    const uploadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCallback"])(async (file, fileType, workspaceId, propertyId, uploadedBy, description, contractorId)=>{
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
            setFiles((prev)=>[
                    data.data,
                    ...prev
                ]);
            console.log("✅ File uploaded successfully");
            return data.data;
        } catch (err) {
            const message = err instanceof Error ? err.message : "Upload failed";
            setError(message);
            throw err;
        } finally{
            setIsLoading(false);
        }
    }, []);
    // Fetch files
    const fetchFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCallback"])(async (filters)=>{
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
    }, []);
    // Update file
    const updateFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCallback"])(async (fileId, updates)=>{
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
            setFiles((prev)=>prev.map((f)=>f._id === fileId ? data.data : f));
            console.log("✅ File updated");
            return data.data;
        } catch (err) {
            const message = err instanceof Error ? err.message : "Update failed";
            setError(message);
            throw err;
        } finally{
            setIsLoading(false);
        }
    }, []);
    // Delete file
    const deleteFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCallback"])(async (fileId)=>{
        try {
            setIsLoading(true);
            setError(null);
            console.log("🗑️ Deleting file:", fileId);
            const res = await fetch(`/api/files/${fileId}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Delete failed");
            setFiles((prev)=>prev.filter((f)=>f._id !== fileId));
            console.log("✅ File deleted");
        } catch (err) {
            const message = err instanceof Error ? err.message : "Delete failed";
            setError(message);
            throw err;
        } finally{
            setIsLoading(false);
        }
    }, []);
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c16d729a._.js.map