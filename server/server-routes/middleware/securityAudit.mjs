import { createHmac } from 'node:crypto';

function securityAudit(req, res, next) {
try{
    if (req.method === "POST") {
        if (req.body.password) {
            let psw = req.body.password;
            req.body.password = "";
            let securityToken = {
                psw: hashPassword(psw, process.env.SECRET)
            }
            req.token = securityToken;
        }
    }
next();
} catch(err){
     return res.status(500).json({ error: "Security error" });
}
}

function hashPassword(psw, secret) {
    const signer = createHmac("sha256", secret);
    signer.update(psw);
    return signer.digest("hex");
}

export default securityAudit;