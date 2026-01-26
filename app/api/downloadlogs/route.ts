// app/api/downloadlogs/route.js
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(request:any) {
  try {
    // Path to logs.txt file
    const logsPath = join(process.cwd(), 'logs', 'log.txt');

    // Check if file exists
    if (!existsSync(logsPath)) {
      return new Response(
        JSON.stringify({ error: 'Logs file not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Read the file
    const fileContent = await readFile(logsPath);

    // Return the file as a download
    return new Response(fileContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="logs-${new Date().toISOString().split('T')[0]}.txt"`,
        'Content-Length': fileContent.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error downloading logs:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to download logs',
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}