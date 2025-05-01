import { formatDistanceToNow } from "date-fns";

export const formatDate = (targetDate: string) => {
    let format = formatDistanceToNow(new Date(targetDate), { addSuffix: true })
    return format ?? '';        
}

export const showPageLoader = () => {
    let fullPageLoader = document.getElementById("full-page-loader") as HTMLElement
    if (fullPageLoader) {            
        fullPageLoader.style.display = "block";    
    }
}

export const hidePageLoader = () => {
    let fullPageLoader = document.getElementById("full-page-loader") as HTMLElement
    if (fullPageLoader) {            
        fullPageLoader.style.display = "none";    
    }
}