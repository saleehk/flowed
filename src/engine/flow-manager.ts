import {FlowSpec} from './flow-specs'
import {Flow, GenericValueMap} from './flow'


export class FlowManager {

    static run(flowSpec: FlowSpec, params: GenericValueMap = {}) {
        const flow = new Flow(flowSpec);
        return flow.run(params);
    }
}
