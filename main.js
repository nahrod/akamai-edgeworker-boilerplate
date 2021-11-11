/*
Purpose:
Repo: 
*/

/*
# Built-in Modules
https://techdocs.akamai.com/edgeworkers/docs/built-in-modules

import { createResponse } from 'create-response';
import { ReadableStream, WritableStream } from 'streams';
import { TextEncoderStream, TextDecoderStream } from 'text-encode-transform';
import { httpRequest } from 'http-request';
import { Cookies, SetCookie } from 'cookies';
import { URLSearchParams } from 'url-search-params';  
import { logger } from 'log';
*/

/*
# Event Handlers
https://techdocs.akamai.com/edgeworkers/docs/event-handler-functions
https://techdocs.akamai.com/edgeworkers/docs/about-the-javascript-api

export function onClientRequest (request) {  }
export function onClientResponse (request, response) {  }
export function onOriginRequest (request) {  }
export function onOriginResponse (request, response) {  }
export function responseProvider (request) {  }
*/

import { logger } from 'log';

export function onClientRequest (request) {
  // Outputs a message to the X-Akamai-EdgeWorker-onClientRequest-Log header.
  logger.log('Responding with hello world from the path: %s', request.path);
  request.respondWith(
    200, {},
    '<html><body><h1>Hello World From Akamai EdgeWorkers</h1></body></html>');
}

export function onClientResponse (request, response) {
  // Outputs a message to the X-Akamai-EdgeWorker-onClientResponse-Log header.
  logger.log('Adding a header in ClientResponse');

  response.setHeader('X-Hello-World', 'From Akamai EdgeWorkers');
}