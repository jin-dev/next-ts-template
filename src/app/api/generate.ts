import * as dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const openai = new OpenAI({
  organization: 'org-qdvjJZK6JzGZ8EO1mkHX4blS',
  project: '',
});
