import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 import 추가
import App from './phonedemonium/pages/PhoneMain';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    );
}

export default Router;
