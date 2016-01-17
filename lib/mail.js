'use strict';

const nodemailer = require('nodemailer');
const mail = require('../config').mail;
const transport;

exports.send = function*(to, cc, subject, html, attach) {
  attach = attach || [];
  attach = attach.map(function(v) {
    return {
      filename: v.name,
      path: v.url
    };
  });

  if (mail.enable === false) {
    return;
  }
  if (!transport) {
    transport = nodemailer.createTransport(mail);
  }
  let message = {
    from: mail.from,
    to: to,
    subject: subject,
    html: '<p style="width:640px;margin:0 auto;padding:15px;color:#666;-webkit-font-smoothing:antialiased;font-family:\'Helvetica Neue\',Helvetica,\'PingFang SC\',\'Hiragino Sans GB\',\'Microsoft YaHei\',微软雅黑,SimSun,sans-serif;">' + html.replace(/\n/g, '<br/>') + '</p>'
  };

  cc && (message.cc = cc);
  attach && (message.attach = attach);

  return yield transport.sendMail(message);
};