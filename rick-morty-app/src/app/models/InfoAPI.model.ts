import { CharacterModel } from './Character.model';
import { EpisodeModel } from './Episode.model';
import { UserModel } from './User.model';

export interface InfoAPIModel {
    info: {
        count: number,
        page: number,
        pages: number,
        pageSize: number
    };
    results: CharacterModel[] | EpisodeModel[] | UserModel[];
}
