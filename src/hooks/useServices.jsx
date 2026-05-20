import { useEffect, useState } from "react";
import { useAxiosPublic } from "./useAxiosPublic";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const { data } = await axiosPublic.get("/services");
            setServices(data);
        } catch (error) {
            console.error("Failed to fetch services:", error);
        } finally {
            setLoading(false);
        }
    };

    return { services, loading };
};

export default useServices;