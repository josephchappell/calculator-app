//import Ember from 'ember';
import AuthenticatedRoute from './authenticated';

export default AuthenticatedRoute.extend({
    model() {
        return this.store.createRecord('register', {
            register: this.controllerFor('calculator').get('registerDisplay')
        });
    },
    actions: {
        saveRegister(model) {
            model.set('date', Date()); //just want string not object
            model.save();
            this.transitionTo('calculator');
        },
        showSaveModal() {
            this.render('register-label-modal',{
                into: 'application',
                outlet: 'modal',
                controller: this.get('controller')
            });
        },
        clearSaveModal() {
            this.disconnectOutlet('modal');
        },
        discardRegister() {
            this.transitionTo('calculator');
        }
    }
});
