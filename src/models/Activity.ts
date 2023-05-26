import { IntensityLevel } from "./IntensityLevels";
import { Module } from "./Module";
import { Topic } from "./Topic";

export interface Activity{

     ActivitiesId : bigint;

     ActivityTitle : string;  

     ActivityContent : string;  

     IntensityLevelId? : bigint; 

     TopicId? : bigint; 

     ModuleId? : bigint; 

     IntensityLevel : IntensityLevel;

     Module : Module ;

     Topic : Topic;

    }