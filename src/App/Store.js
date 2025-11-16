import { configureStore } from "@reduxjs/toolkit";
import Bussins_Card from '../Features/Bussins_Card/Bussins_Card'

export const store = configureStore({
    reducer: {InfoCard: Bussins_Card},
})