## Setup monorepo project

    $> git clone git@github.com:scaljeri/lerna.git
    $> cd lerna
    $> lerna bootstrap --use-workspaces
    $> lerna run build

The last command produces the following error

    src/ab.ts(1,19): error TS2307: Cannot find module '@scaljeri/a'.
    src/ab.ts(2,19): error TS2307: Cannot find module '@scaljeri/b'.

    lerna ERR! npm run build stderr:
    npm ERR! code ELIFECYCLE
    npm ERR! errno 2
    npm ERR! @scaljeri/ab@0.0.0 build: `tsc`
    npm ERR! Exit status 2
    npm ERR! 
    npm ERR! Failed at the @scaljeri/ab@0.0.0 build script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/luca/.npm/_logs/2019-05-07T20_19_49_995Z-debug.log
    
    lerna ERR! npm run build exited 2 in '@scaljeri/ab'