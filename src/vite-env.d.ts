/// <reference types="vite/client" />
declare module "*.md";

declare module '*.mp3' {
const src: string;
export default src;
}

declare module '*.wav' {
const src: string;
export default src;
}