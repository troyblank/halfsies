
import React from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { assert } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import AuthRedirect from './authRedirect';

describe('Auth Redirect', () => {
    it('should render', () => {
        const wrapper = shallow(<AuthRedirect />);

        assert.isTrue(wrapper.contains(<x />));
    });

    it('should get a listing on mount', () => {
        const push = sinon.spy();
        const mockRouter = { push };

        render(
          <RouterContext.Provider value={mockRouter}>
            <AuthRedirect />
          </RouterContext.Provider>
        );

        assert.isTrue(push.calledOnce);
        assert.isTrue(push.calledWith('/signin'));
    });
});


// import React from 'react';
// import { assert } from 'chai';
// import { shallow, mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import { RouterContext } from 'next/dist/next-server/lib/router-context';
// import Chance from 'chance';
// import RecipePage from '../../../pages/recipe/[recipe]';
// import { Recipe } from '../../components/connections';
// import { Head, Navigation } from '../../components';

// describe('Page - [Recipe]', () => {
//     const chance = new Chance();

//     it('should render', () => {
//         const wrapper = shallow(<RecipePage />);

//         assert.isTrue(wrapper.contains(
//           <x>
//             <Head />
//             <Navigation />
//           </x>
//         ));
//     });

//     it('should render with the recipe query', () => {
//         const recipe = chance.word();
//         const shoppingListStore = chance.word();
//         const mockRouter = { query: { recipe } };
//         // istanbul ignore next
//         const mockStore = {
//             getState: () => ({ shoppingListStore }),
//             subscribe: () => {},
//             dispatch: () => {}
//         };
//         const wrapper = mount(
//           <Provider store={mockStore}>
//             <RouterContext.Provider value={mockRouter}>
//               <RecipePage />
//             </RouterContext.Provider>
//           </Provider>
//         );

//         assert.isTrue(wrapper.contains(
//           <x>
//             <Head />
//             <Navigation />
//             <Recipe fileName={recipe} />
//           </x>
//         ));
//     });
// });
