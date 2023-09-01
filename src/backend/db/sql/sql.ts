import {QueryFile, IQueryFileOptions} from 'pg-promise';
import {join} from 'path';

export const users = {
    create: sql('users/create.sql'),
    add: sql('users/add.sql'),
    all: sql('users/all.sql')
};

export const reviews = {
    create: sql('reviews/create.sql'),
    all: sql('reviews/all.sql')
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
