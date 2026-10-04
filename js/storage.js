const KEYS={saved:"careernest_saved_jobs",applications:"careernest_applications",theme:"careernest_theme"};
export const getSavedIds=()=>JSON.parse(localStorage.getItem(KEYS.saved)||"[]");
export const setSavedIds=(ids)=>localStorage.setItem(KEYS.saved,JSON.stringify(ids));
export const isSaved=(id)=>getSavedIds().includes(Number(id));
export function toggleSaved(id){const n=Number(id),ids=getSavedIds();const next=ids.includes(n)?ids.filter(x=>x!==n):[...ids,n];setSavedIds(next);return next.includes(n)}
export const getApplications=()=>JSON.parse(localStorage.getItem(KEYS.applications)||"[]");
export const setApplications=(apps)=>localStorage.setItem(KEYS.applications,JSON.stringify(apps));
export const addApplication=(application)=>{const apps=getApplications();apps.unshift(application);setApplications(apps);return application};
export const deleteApplication=(id)=>setApplications(getApplications().filter(app=>app.id!==id));
export const getTheme=()=>localStorage.getItem(KEYS.theme)||"light";
export const setTheme=(theme)=>localStorage.setItem(KEYS.theme,theme);
export const uid=()=>`${Date.now()}-${Math.random().toString(16).slice(2)}`;