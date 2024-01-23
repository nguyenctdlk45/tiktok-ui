import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './routes';
import { DefaultLayout } from '~/components/layout';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {PublicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
