import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import PrivateRoute from './privateRoute'

const AllPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, idx) => {
                    const Component = route.component
                    if (route?.ispublic)
                        return (
                            <Route
                                path={route?.path}
                                element={<Component />}
                                key={idx}
                            />
                        )
                    return (
                        <Route
                            path={route?.path}
                            element={
                                <PrivateRoute>
                                    <Component />
                                </PrivateRoute>
                            }
                            key={idx}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default AllPages
