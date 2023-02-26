import "../../css/headings.css";

export const new_tab = (document: any) => {
    return (
        document.querySelectorAll("div #con a").forEach((item : any) => item.setAttribute('target', '_blank'))
    );
  };

export const content_selector = (document: any) => {
    return (
        document.querySelectorAll('div .cledit-section span').forEach((item: any)=> console.log(item.innerText))
    );
  };
  