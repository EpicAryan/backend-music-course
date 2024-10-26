import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

// Generate Access Token
export const generateAccessToken = (userId: string): string => {
    return jwt.sign(
        { userId }, 
        ACCESS_TOKEN_SECRET, 
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
        }
    );
};

// Generate Refresh Token
export const generateRefreshToken = (userId: string): string => {
    return jwt.sign(
        { userId }, 
        REFRESH_TOKEN_SECRET, 
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
        }
    );
};


// Verify Access Token
export const verifyAccessToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
      return { valid: true, decoded };
    } catch (error) {
      return { valid: false, error };
    }
  };
  
  // Verify Refresh Token
  export const verifyRefreshToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET);
      return { valid: true, decoded };
    } catch (error) {
      return { valid: false, error };
    }
  };