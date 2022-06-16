import { defineComponent } from "vue";
import { getCreationToolsList } from "../../../engine/create";

type iterableTools = {
    id: number,
    group?: string,
    name: string
}[];

interface Data {
    allTools: iterableTools;
    primitivesTools: iterableTools;
    fxTools: iterableTools;
    triggersTools: iterableTools;
}

export default defineComponent({
    data: (): Data => ({
        allTools: [],
        primitivesTools: [],
        fxTools: [],
        triggersTools: []
    }),
    mounted() {
        this.allTools = getCreationToolsList();
        this.primitivesTools = getCreationToolsList('primitives');
        this.fxTools = getCreationToolsList('fx');
        this.triggersTools = getCreationToolsList('triggers');
    }
});
