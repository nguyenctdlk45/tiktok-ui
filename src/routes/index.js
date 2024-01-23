import { OnlyHeader } from '~/components/layout';

import Following from '~/pages/following';
import Home from '~/pages/Home';
import Profile from '~/pages/profile';
import Upload from '~/pages/Upload';
// import { OnlyHeader } from '~/components/layout';

const PublicRoutes = [
    { path: '/following', component: Following },
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: OnlyHeader },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
