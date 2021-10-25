import mongoose, {ConnectOptions} from 'mongoose';
import * as dotenv from 'dotenv';

// defining variable path
dotenv.config({ path: 'variables.env' });

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO !, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default conectDB;