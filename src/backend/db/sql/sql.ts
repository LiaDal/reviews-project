import {QueryFile, IQueryFileOptions} from 'pg-promise';
import {join} from 'path';

export const users = {
    create: sql('users/create.sql'),
    add: sql('users/add.sql'),
};

function sql(file: string): QueryFile {

    const fullPath: string = join(__dirname, file);

    const options: IQueryFileOptions = {
        minify: true
    };

    const qf: QueryFile = new QueryFile(fullPath, options);

    if (qf.error) {
        throw qf.error
    }

    return qf;
}
