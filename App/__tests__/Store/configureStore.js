import configureStore from '../../Store/configureStore';

describe('Store/configureStore.js.js', () => {
  it('renders correctly', () => {
    const previousEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const store = configureStore();

    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
    expect(store.getState).toBeDefined();
    expect(store.replaceReducer).toBeDefined();

    process.env.NODE_ENV = previousEnv;
  });
});
