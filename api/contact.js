const clean=value=>String(value||'').trim().slice(0,5000);
const escapeHtml=value=>clean(value).replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

export default async function handler(request,response){
  if(request.method!=='POST')return response.status(405).json({error:'Method not allowed.'});
  if(Number(request.headers['content-length']||0)>30000)return response.status(413).json({error:'The enquiry is too large.'});
  const body=request.body||{};
  if(body.website_confirm)return response.status(200).json({ok:true});
  const required=['name','email','company','service','budget','timeline','objective','challenge','consent'];
  if(required.some(field=>!clean(body[field])))return response.status(400).json({error:'Please complete every required field.'});
  const email=clean(body.email).toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return response.status(400).json({error:'Please enter a valid work email.'});
  const apiKey=process.env.RESEND_API_KEY,from=process.env.CONTACT_FROM_EMAIL,to=process.env.CONTACT_TO_EMAIL||'contact@kynorstudio.com';
  if(!apiKey||!from)return response.status(503).json({error:'The enquiry service is not configured yet.'});
  const fields=[['Name',body.name],['Email',email],['Company',body.company],['Website',body.website],['Service',body.service],['Budget',body.budget],['Timeline',body.timeline],['Source',body.source],['Objective',body.objective],['Current challenge',body.challenge],['References',body.references]];
  const html=`<div style="font-family:Arial,sans-serif;max-width:720px;margin:auto;color:#111214"><p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#275dff">New project enquiry / Kynor Studio</p><h1 style="font-size:32px">${escapeHtml(body.company)} — ${escapeHtml(body.service)}</h1>${fields.map(([label,value])=>`<div style="padding:14px 0;border-top:1px solid #d9d9d9"><strong>${label}</strong><p style="white-space:pre-wrap;line-height:1.5">${escapeHtml(value)||'—'}</p></div>`).join('')}</div>`;
  const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json','User-Agent':'kynor-studio/1.0'},body:JSON.stringify({from,to:[to],reply_to:email,subject:`New Kynor enquiry — ${clean(body.company)} — ${clean(body.service)}`,html})});
  if(!sent.ok){console.error('Resend error',await sent.text());return response.status(502).json({error:'The enquiry could not be delivered.'})}
  return response.status(200).json({ok:true});
}
