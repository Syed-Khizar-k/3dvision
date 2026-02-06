declare module "pannellum" {
 export interface PannellumConfig {
  type?: "equirectangular" | "cubemap" | "multires";
  panorama: string;
  autoLoad?: boolean;
  autoRotate?: number;
  compass?: boolean;
  showZoomCtrl?: boolean;
  showFullscreenCtrl?: boolean;
  mouseZoom?: boolean;
  draggable?: boolean;
  keyboardZoom?: boolean;
  hfov?: number;
  minHfov?: number;
  maxHfov?: number;
  pitch?: number;
  yaw?: number;
  haov?: number;
  vaov?: number;
  vOffset?: number;
  onLoad?: () => void;
  hotSpots?: HotSpot[];
 }

 export interface HotSpot {
  pitch: number;
  yaw: number;
  type: "scene" | "info";
  text?: string;
  sceneId?: string;
  targetYaw?: number;
  targetPitch?: number;
 }

 export interface Viewer {
  setPitch(
   pitch: number,
   animated?: boolean,
   callback?: () => void,
   callbackArgs?: any,
  ): Viewer;
  setYaw(
   yaw: number,
   animated?: boolean,
   callback?: () => void,
   callbackArgs?: any,
  ): Viewer;
  setHfov(
   hfov: number,
   animated?: boolean,
   callback?: () => void,
   callbackArgs?: any,
  ): Viewer;
  getPitch(): number;
  getYaw(): number;
  getHfov(): number;
  loadScene(sceneId: string, pitch?: number, yaw?: number, hfov?: number): void;
  destroy(): void;
  isLoaded(): boolean;
  toggleFullscreen(): void;
 }

 export function viewer(
  container: HTMLElement | string,
  config: PannellumConfig,
 ): Viewer;
}
