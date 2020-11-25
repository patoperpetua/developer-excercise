import { ParametersIdDeleted } from "./ParametersIdDeleted";

export interface ParametersComplete extends ParametersIdDeleted {
    skip?: number | null;
    limit?: number | null;
    sort?: string | null;
    filterBy?: string | null;
    metadata?: boolean | null;
}