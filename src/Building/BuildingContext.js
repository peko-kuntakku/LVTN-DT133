import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
const BuildingContext = createContext();

export const useBuildingContext = () => {
    return useContext(BuildingContext);
};
export const createNewBuilding = async (data) => {
    await http.post("/api/building", data);
};

export const buildingProvider = ({children}) => {
    const [buildings, setBuildings] = useState("");
    const [nav_value, set_nav_value] = useState("BuildingList");
    const [buildingId, setBuildingId] = useState("");
    
    const createNewBuilding = async (data) => {
        await http.post("/api/building", data);
    };
    const updateBuilding = async (buildingId, data) => {
        await http.put(`/api/building/${buildingId}`, data);
    };
    const deleteBuilding = async (buildingId) => {
        await http.delete(`/api/building/${buildingId}`);
    };
    const getBuildingId = (id) => {
        setBuildingId(id);
    };
    const changeNavValue = (value) => {
        set_nav_value(value);
    };

    useEffect(()=>{
        const readAllbuildings = async () => {
            const response = await http.get("/api/buildings");
            const responseArr = Object.values(response.data.data);
            setBuildings(responseArr);
        };
        return readAllbuildings;
    }, []);

    const value = {
        createNewBuilding,
        buildings,
        updateBuilding,
        deleteBuilding,
        changeNavValue,
        nav_value,
        getBuildingId,
        buildingId
    };

    return(
        <BuildingContext.Provider value={value}>
            {children}
        </BuildingContext.Provider>
    )
}; 