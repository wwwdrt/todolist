import Data from './components/Data.js';
import Create from './components/Create.js';
import Read from './components/Read.js';
import Update from './components/Update.js';
import Destroy from './components/Destroy.js';

const tasks = new Data();
const read = new Read(tasks);
const update = new Update(tasks, read);
const create = new Create(tasks);
// eslint-disable-next-line no-new
new Destroy(tasks);

tasks.loadTasks();
read.setupEventListeners();
update.load();
create.setupFormEventListener();
