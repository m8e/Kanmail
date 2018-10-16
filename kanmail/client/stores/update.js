import { BaseStore } from 'stores/base.jsx';

import { get, post } from 'util/requests.js';


class UpdateStore extends BaseStore {
    /*
        Global store of the users app settings.
    */

    static storeKey = 'updateStore';

    constructor() {
        super();

        this.props = {
            updateVersion: null,
        };
    }

    checkUpdate() {
        return get('/api/update').then(data => {
            if (data.update) {
                this.props.updateVersion = data.update;
            }
            this.triggerUpdate();
        });
    }

    doUpdate() {
        // Just do the post - it'll nuke the window!
        return post('/api/update');
    }
}


const updateStore = new UpdateStore();
export default updateStore;