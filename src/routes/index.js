import { OnlyHeader } from '~/layout';

import Following from '~/pages/following';
import Home from '~/pages/Home';
import Profile from '~/pages/profile';
import Upload from '~/pages/Upload';
import config from '~/config';
// import { OnlyHeader } from '~/layout';

const PublicRoutes = [
    { path: config.routes.following, component: Following },
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: OnlyHeader },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
