import { debug as rawDebug } from 'debug';
import { FlowStateEnum } from '../../types';
import { FlowState } from './flow-state';
const debug = rawDebug('flowed:flow');

export class FlowPausing extends FlowState {
  public getStateCode(): FlowStateEnum {
    return FlowStateEnum.Pausing;
  }

  public paused(error: Error | boolean = false) {
    this.setState(FlowStateEnum.Paused);

    if (error) {
      debug(`[${this.runStatus.id}] ⏸ Flow paused with error.`);
      this.execPauseReject(error as Error);
    } else {
      debug(`[${this.runStatus.id}] ⏸ Flow paused.`);
      this.execPauseResolve();
    }
  }
}
